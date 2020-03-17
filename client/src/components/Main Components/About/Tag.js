import React from 'react';
//import icons for tags
import {DiJavascript1, DiReact, DiCss3, DiSass, DiLess, DiTerminalBadge} from 'react-icons/di'
import {FaCheck} from'react-icons/fa'
const Tag = ({skill}) => {
    let Icon = [];
    switch(skill){
        case (skill.toLowerCase() === 'javascript'):
            Icon = DiJavascript1;
            break;
        default: Icon = DiTerminalBadge;
    }
    console.log(skill);
    return (
        <div class="field is-grouped is-grouped-multiline">
            <div class="control">
                <div class="tags has-addons">
                    <span class="tag is-dark"><FaCheck/></span>
                    <span class="tag is-info">{skill}</span>
                </div>
            </div>
        </div>
    )
}

export default Tag;