import React from "react";
import SidebarStyles from "./Sidebar.module.css";

export interface SidebarProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    content?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children, className, style, content }) => {
    let classes: string[] = [SidebarStyles["gb-sidebar"]];

    if (className) {
        classes.push(className);
    }

    return (
        <div className={SidebarStyles["gb-sidebar--wrapper"]}>
            <div className={SidebarStyles["gb-sidebar--toggle"]}>
                <input type={"checkbox"} className={SidebarStyles["gb-sidebar--checkbox"]} />

                <div className={SidebarStyles["gb-sidebar--toggle--icon"]}>
                    <div className={[SidebarStyles["spinner"], SidebarStyles["diagonal"], SidebarStyles["part-1"]].join(' ')}></div>
                    <div className={[SidebarStyles["spinner"], SidebarStyles["horizontal"]].join(' ')}></div>
                    <div className={[SidebarStyles["spinner"], SidebarStyles["diagonal"], SidebarStyles["part-2"]].join(' ')}></div>
                </div>
            </div>
            <div className={classes.join(" ")} style={style}>
                {children}
            </div>
            <div className={[SidebarStyles["gb-sidebar--content"], "w-full"].join(' ')}>
                {content}
            </div>
        </div>
    );
};

export default Sidebar;