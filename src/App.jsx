import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';
import clsx from 'clsx';

export default function App() {
    return (
        <div className={'bg-slate-900 grid place-content-center min-h-screen'}>
            <div className='flex gap-x-2'>
                <Button
                    {...{
                        // type: 'button',
                        text: 'Login',
                        onClick: () => console.log('Click with another style'),
                    }}
                />
                <Button onClick={() => console.log('Register')} type='button'>
                    <IconBrandFacebook />
                    Register
                </Button>
                <Button onClick={() => console.log('Login')} type='submit'>
                    <IconBrandTwitter />
                    Login
                </Button>
            </div>
        </div>
    );
}

function Button(props) {
    const {
        className = 'bg-blue-600',
        text,
        children,
        type = 'submit',
    } = props;
    return (
        <button
            {...props}
            type={type}
            className={clsx(
                className,
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex item-center gap-x-2 text-white px-4 py-2 rounded'
            )}
        >
            {text || children}
        </button>
    );
}
