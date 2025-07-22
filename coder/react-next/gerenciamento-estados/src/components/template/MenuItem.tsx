import Link from 'next/link';
import React from 'react';

type MenuItemProps = {
    url: string;
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
};

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url} className="
            flex flex-col items-center gap-2
        "> 
            <div className="
                bg-gradient-to-r from-blue-500 to-green-500
                rounded-full p-5
            ">
                {React.isValidElement(props.icon) ? 
                    React.cloneElement(props.icon, { 
                        size: 90,
                        stroke: 1,
                        className: 'opacity-40'
                    }
                    ) : null}
            </div>
            <span className='opacity-50 font-black text-3xl'>{props.label}</span>
        </Link>
    )
}