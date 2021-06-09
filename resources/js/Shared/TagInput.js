import React, { useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
    comma: 188,
    enter: 13,
};


const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default ({ label, name, tags, suggestions, data,callback,label_required, className ,...props }) => {

    function handleTagDelete(i) {
        callback(data => ({...data ,[name]:data[name].filter((tag, index) => index !== i)}));
    }

    function handleTagAddition(tag){
        console.log(tag)
        callback(data => ({...data,tags:[...data[name], tag
            ]
        }));
    }

    function  handleTagDrag(tag, currPos, newPos){
        let tags = [...data[name]];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        callback(data => ({...data, [name]: newTags}));
    }

    return (
        <div className={`form-group ${className}`}>
            <label className={`h4 mb-3 fw-light ${ label_required?'required form-label': ''}`}>{label}</label>
                <ReactTags
                    classNames={{
                        tagInputField: 'form-control form-control-solid',
                        tag: 'tagify__tag tagify--noAnim badge badge-primary',
                        remove: 'tag-input-remove',
                        suggestions: 'tagify__inline__suggestions',
                        activeSuggestion: 'active list-group-item'
                    }}
                    tags={tags}
                    suggestions={suggestions}
                    inline
                    delimiters={delimiters}
                    autocomplete
                    handleDelete={handleTagDelete}
                    handleAddition={handleTagAddition}
                    handleDrag={handleTagDrag}
                    inputFieldPosition="top"

                    {...props}
                />
        </div>
    )
};
