import React, { useEffect, useRef } from "react";
export default function CKeditorC({ setAnswer, editorLoaded, name, value,defaultValue }) {
    const editorRef = useRef();
    const { CKEditor, ClassicEditor } = editorRef.current || {};
useEffect(() => {
    editorRef.current = {
         CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, 
         ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
        };
    }, []);
    return (
        <>
            {editorLoaded ? (
                <CKEditor
                    type="ffs"
                    name="answer"
                    editor={ClassicEditor}
                    data={defaultValue}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setAnswer(data);
                    }}
                />

            ) : (
                <div>Editor loading</div>
            )}
        </>
    )
}