const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app= express();
const port=8008;
const Branch=require('./db/models/branch');
const Department=require('./db/models/department');
const DeptDetails=require('./db/models/dept_details');
const dbsetup=require('./db/db-setup');

dbsetup();
app.use(cors());
app.use(bodyParser.json());



app.get('/branch',async (req,res)=>{ 
    const branches=await Branch.query().select('branch_id','branch_name','branch_address');   
    res.json(branches);
});
app.get('/dept',async (req,res)=>{   
    const depts=await Department.query().select('dept_id','dept_name'); 
    res.json(depts);
});

app.get('/branch/:branch_id',async (req,res)=>{  
    const{branch_id} = req.params; 
    //const depts=await DeptDetails.query().select('dept_id').where('branch_id',branch_id);
    const depts=await Department.query().select('dept_name').whereExists(
        DeptDetails.query()
          .select(1)
          .whereColumn('dept_details.dept_id', 'department.dept_id')
      )
    res.json(depts);
});
app.post('/branch',async (req,res)=>{    
    const {branch_id,branch_name,branch_address} =req.body;
    const id =await Branch.query().insert({
            branch_id,
            branch_name,
            branch_address,            
        });
    res.send('branch added successfully');
});
app.post('/dept',async (req,res)=>{ 
    const {dept_id,dept_name} =req.body;
    const id =await Department.query().insert({
            dept_id,
            dept_name,                       
        });       
    res.send('dept added successfully');
});

app.post('/branch/dept',async (req,res)=>{ 
    const {dept_id,branch_id} =req.body;
    const id =await DeptDetails.query().insert({
            dept_id,
            branch_id,                       
        });       
    res.send('dept linked successfully');
});

app.listen(port,()=>console.log('server running...'));