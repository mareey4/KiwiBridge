import Image from 'next/image'
import nzHerald from '../../public/nzHerald1.png'
import { Paper } from '@mui/material'

export default function NzHerald() {
    return(
        <div>
            <Paper elevation={3}>
            <Image
            src={nzHerald.src}
            width={200}
            height={150}
            alt="Picture of a world"/>
        
            </Paper>
            

        </div>
    )
}