'use client'
import React, { useEffect, useState } from 'react';
import {ContentState, EditorState, convertFromHTML, convertFromRaw, convertToRaw} from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
import dynamic from 'next/dynamic';
import '@/styles/inputs.scss';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const DynamicEditor = dynamic(
    () => import('react-draft-wysiwyg').then((module) => module.Editor),
    { ssr: false }
  );

const RichText = ({value=null, handleChange}) => {
    const [val, setVal] = useState('');
    const [editorState, setEditorState] = React.useState(() => {
        EditorState.createEmpty();
    });

    useEffect(()=>{
        if(value && !val){
            setVal(value);
            if(isJSON(value)){
                setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(value))))
            }else{
                setEditorState(EditorState.createWithContent(
                    ContentState.createFromBlockArray(
                      convertFromHTML(`<p>${value}</p>`)
                    )
                ))
            }
        }
    }, [value])
    
    
    function isJSON(str) {
        try {
            return (JSON.parse(str) && !!str);
        } catch (e) {
            return false;
        }
    }

    const updateTextDescription = (state) => {
        setEditorState(state);
        const contentState = state.getCurrentContent();        
        handleChange(JSON.stringify(convertToRaw(contentState)));
    };

    return (
        <div className="textarea">
            <DynamicEditor 
                locale='ru'
                editorState={editorState} 
                onEditorStateChange={updateTextDescription} 
                wrapperClassName='wrapper-class' 
                toolbarClassName='toolbar-class' 
                editorClassName='editor-class' 
                toolbar={{
                    options: [
                        'inline', 
                        'blockType', 
                        'fontSize', 
                        'fontFamily', 
                        'textAlign', 
                        'link', 
                        'emoji', 
                        'remove', 
                        'history'
                    ]  
                }}
            />
        </div> 
    ) ;
};

export default RichText;