import clsx from 'clsx';

export default function Button(props) {
    const { className = 'bg-blue-600', text, children, type = 'submit' } = props;
    return (
        <button
            {...props}
            type={type}
            className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex item-center gap-x-2 text-white px-4 py-2 rounded')}>
            {text || children}
        </button>
    );
}
