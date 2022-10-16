import React from "react";
import ArenaStyles from "./Arena.module.css";

export interface ArenaProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    navBar: React.ReactNode;
    sideBar?: React.ReactNode;
}

export const Arena: React.FC<ArenaProps> = ({ children, className, style, navBar, sideBar }) => {
    let classes: string[] = [ArenaStyles["gb-arena"]];

    if (className) {
        classes.push(className);
    }

    return (
        <div className={classes.join(" ")} style={style}>
            <div className={ArenaStyles['gb-arena--navbar']}>
                {navBar}
            </div>
            <div className={[ArenaStyles['gb-arena--sidebar'], ArenaStyles['gb-arena--content']].join(' ')}>
                <div className={ArenaStyles["gb-arena--sidebar"]}>
                    {sideBar}
                </div>
                
                {/* <div className={ArenaStyles['gb-arena--content']}>
                    {children}
                </div> */}
            </div>
        </div>
    );
};