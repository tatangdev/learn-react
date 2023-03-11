import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';
import Button from './components/Button';
import Card from './components/Card';

export default function App() {
    return (
        <div className={'bg-slate-100 antialiased flex items-center justify-center min-h-screen'}>
            <div className='max-w-md w-full'>
                <Card>
                    <Card.Title>Hello React</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, dolorum sapiente? Expedita, non molestias quas obcaecati illum
                        saepe repellendus amet itaque quae explicabo. Asperiores minus ratione rerum! Cumque, fuga laborum.
                    </Card.Body>
                    <Card.Footer>
                        <Button>Register</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}
