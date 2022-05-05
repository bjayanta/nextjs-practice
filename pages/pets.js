import Image from 'next/image';
import img from "../public/images/1.jpg";

function Pets(params) {
    return (
        <div>
            <Image src={ img } placeholder="blur" blurDataURL='' alt="Image 1" width="280" height="420" />

            {
                ['1', '2', '3', '4', '5'].map( path => {
                    return (
                        <div key={ path }>
                            <Image src={ `/images/${ path }.jpg` } alt={path} width="280" height="420" />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Pets;