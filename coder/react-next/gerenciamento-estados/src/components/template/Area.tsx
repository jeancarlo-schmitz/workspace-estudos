"use client";

interface AreaProps {
    titulo: string;
    children?: React.ReactNode;
    className?: string;
    sumario?: string;
}

export default function Area(props: AreaProps) {
    return (
        <div
            className={`
                flex flex-col items-center 
                rounded-md w-full ${props.className ?? ""}`
            }
        >
            <div className={`
                flex items-center w-full ${props.sumario ? 'justify-between' : 'justify-center'}
                bg-black/20 h-14 text-3xl font-black opacity-80
            `}>
                <span className="px-4 ">
                    {props.titulo}
                </span>

                {props.sumario && (
                    <span className="
                        flex items-center px-4
                        bg-black/20 h-full
                    ">
                        {props.sumario}
                    </span>
                )}
            </div>

            <div className="p-7">
                {props.children}
            </div>
        </div>
    );
}
