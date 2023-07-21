import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {ContentState, EditorState, convertFromHTML, convertFromRaw, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import '@/styles/inputs.scss';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichText = ({value, handleChange}) => {
    const [editorState, setEditorState] = React.useState(
        () => {
            console.log(value)
            if(isJSON(value)){
                return EditorState.createWithContent(convertFromRaw(JSON.parse(value)))
            }else{
                return EditorState.createWithContent(
                    ContentState.createFromBlockArray(
                      convertFromHTML(`<p>${value}</p>`)
                    )
                );
            }
        },
    );

    useEffect(()=>{
        if(value){
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

    const updateTextDescription = async (state) => {
        setEditorState(state);
        const contentState = editorState.getCurrentContent();        
        handleChange(JSON.stringify(convertToRaw(contentState)));
    };

    return (
        <div className="textarea">
            <Editor 
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