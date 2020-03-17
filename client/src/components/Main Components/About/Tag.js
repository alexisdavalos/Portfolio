import React from 'react';
//import icons for tags
// import {DiJavascript1, DiReact, DiCss3, DiSass, DiLess, DiTerminalBadge} from 'react-icons/di'
import {FaCheck} from'react-icons/fa'
const Tag = ({skill}) => {
    // let Icon = [];
    // switch(skill){
    //     case (skill.toLowerCase() === 'javascript'):
    //         Icon = DiJavascript1;
    //         break;
    //     default: Icon = DiTerminalBadge;
    // }
    // console.log(skill);
    return (
        <div className="field is-grouped is-grouped-multiline">
            <div className="control">
                <div className="tags has-addons">
                    <span className="tag is-dark"><FaCheck/></span>
                    <span className="tag is-info">{skill}</span>
                </div>
            </div>
        </div>
    )
}

export default Tag;