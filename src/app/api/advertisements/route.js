import connectMongo from "@/database/connect";
import Advertisement from "@/database/models/advertisement";
import { NextResponse } from "next/server";
import { mkdir, stat, writeFile } from "fs/promises";
import { join } from "path";
import mime from "mime";

export async function GET() {
    try {
        await connectMongo();
        const ads = await Advertisement.find();
        return NextResponse.json(ads);
    } catch (error) {
        return NextResponse.json(null, {status: 500});
    }
}

export async function POST(request) {
    const formData = await request.formData();
    var data = {};
    formData.forEach(function(value, key){
        data[key] = value;
    });

    // upload Images
    const image = await formData.get('image'); 
    let imgUrl = null;
    const buffer = Buffer.from(await image.arrayBuffer());
    const relativeUploadDir = `/uploads`;
    const uploadDir = join(process.cwd(), "public", relativeUploadDir);
    try {
        await stat(uploadDir);
      } catch (e) {
        if (e.code === "ENOENT") {
          await mkdir(uploadDir, { recursive: true });
        } else {
          console.error(e);
          return NextResponse.json("Something went wrong.",
            { status: 500 }
          );
        }
      }
    try {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const filename = `${image.name.replace(
          /\.[^/.]+$/,
          ""
        )}-${uniqueSuffix}.${mime.getExtension(image.type)}`;
        await writeFile(`${uploadDir}/${filename}`, buffer);
        imgUrl = filename;
        // return NextResponse.json({ fileUrl: `${relativeUploadDir}/${filename}` });
    } catch (e) {
        console.error("Error while trying to upload a file\n", e);
        return NextResponse.json("Something went wrong.",
            { status: 500 }
        );
    }
    if(imgUrl){
        data.image = imgUrl;
    }

    try {
        await connectMongo();

        const ad = await Advertisement.create(data);

        return NextResponse.json(ad);

    } catch (error) {
        console.log(error);
        return NextResponse.json(null, {status: 500});
    }



}