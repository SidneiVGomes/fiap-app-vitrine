import * as yup from 'yup';

const validationSchema = yup.object().shape({
    title: yup.string().required(),
    price: yup.number().min(1).required(),
    describe: yup.string().max(152).required(),
    //visibleFrom: yup.string().required(),
    //visibleTo: yup.string().required(),
    
})
export default validationSchema;