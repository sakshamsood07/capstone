import classes from './doctor-grid.module.css'
import DoctorItem from './doctor-item'
export default function DoctorGrid({doctors}){
    return <ul className={classes.doctors}>
        {doctors.map(doctor=><li key={doctor.id}><DoctorItem {...doctor}/></li>)}
    </ul>
}