const {Router}=require('express');
const {ProductModel}=require('../Model/Productmodel')
const PostRouter=Router();

PostRouter.get('/Data',async(req,res)=>{
    try {
        let Pro_Data=await ProductModel.find();
        res.send(Pro_Data)
    } catch (error) {
        console.log(error)
    }
})

PostRouter.get('/Data/Category',async()=>{
   const query=req.query;
   if(query.Cat!=undefined){
    try {
        const Pro_Data=await ProductModel.find({category:query.Cat})
        res.send(Pro_Data);
    } catch (error) {
        res.send('Error')
    }
   }
})

PostRouter.get('/Data/q', async (req, res) => {
    const { Pro_Name } = req.query;
    try {
      const Pro_Data = await ProductModel.find({ name: { $regex: Pro_Name, $options: 'i' } });
      res.json(Pro_Data);
    } catch (error) {
      console.error(error);
      res.send({ error: 'server error' });
    }
  });


PostRouter.post('/Data/post',async(req,res)=>{
    const {name, description, category,image,location,postedAt,price} = req.body;
    console.log(req.body)
    console.log('Post Request')

    const CreateNewProd = new ProductModel({
        name,
        description,
        category,
        image,
        location,
        postedAt,
        price
    })
    console.log(CreateNewProd)
    await CreateNewProd.save();
    res.send({msg:"Data Added Sucessfully"})
})


PostRouter.put('/Data/:id', async (req, res) => {
    const Pro_id = req.params.id;
    const UpdatatedProd  = req.body;

    await ProductModel.findByIdAndUpdate(UpdatatedProd)
    res.send({message:`Updated New Product`})
  });


  PostRouter.delete('/Data/:id', async (req, res) => {
    try {
      const Pro_id = req.params.id;
        await Product.findByIdAndRemove(Pro_id);
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error(error);
      res.send({ error:'Error'});
    }
  });





module.exports={PostRouter}