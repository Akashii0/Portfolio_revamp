import React from "react";

export const SkillList = ({ skills }) => {
    return (
        <span className="px-4 py-2 text-sm font-medium rounded-full bg-gray-200 dark:bg-neutral-800 text-gray-800 dark:text-white">
            {skills}
        </span>
    );
};
