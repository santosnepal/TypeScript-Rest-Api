import mongoose from 'mongoose';
import config from 'config';
import log from '../logger';
function connect(){
    const dbURI = config.get('dbURI') as string;
    return mongoose
    .connect(dbURI
    //     ,{
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true,
    // }
    )
    .then(()=>{
        log.info('Database Connected');
    })
    .catch((error)=>{
        // log.info(error);
        log.error('db error',error);
        process.exit(1);
    })
}
export default connect;