<template>
      <div>
        
           
       
         
          <div class="regpatient" >

                <h1 id="pl" >PATIENT LOGIN</h1>
                <form @submit="fs" enctype=multipart/form-data>
                    <ul>
                        <li>
                            <label for="fname" class="label" >Username:</label>
                            <input type="text"   v-model="username"   id="fname" name="username" class="inputfield" required><br><br>
                        </li>
                        <li>
                            <label for="fname" class="label">Password:</label>
                            <input type="text"    v-model="password"   id="fname" name="password" class="inputfield"><br><br>
                        </li>
                      
                      
                       
                        <li>
                            
                        </li>
                    </ul>
                    <input type="submit" value="Submit" name="patient" class="signup">
                </form>

                
            <div>
                       <h1>{{objj.error}}</h1>
                    
            </div>
        
            </div>

              
      
            <vue-instant-loading-spinner ref="Spinner"></vue-instant-loading-spinner>
         </div>
    
    
</template>

<script>
// import uuid from 'uuid';
import VueInstantLoadingSpinner from "vue-instant-loading-spinner/src/components/VueInstantLoadingSpinner.vue";
import axios from "axios";
export default {
    name: "LoginnPatient",
    data (){
        return{
             x:" ",
            objj: {
                
             
               

            },
            
            username: '',
            password: '',
           
          
        
    
        }
    },

    components: {
    VueInstantLoadingSpinner
  },
  methods:{
         async fs(e)
        { 
            //  let list = {};
            // let x;        
            e.preventDefault();
            console.log("submit pressed")
            this.objj.username=this.username
            this.objj.password=this.password
          
            const newTodo = {
                username: this.username,
                password : this.password ,
             
               
            
            }
            console.log(newTodo)
            //1593418037214
          
          let params = {
                patientId: this.username,
                 pswd : this.password 
          }

          let res = await axios.post('http://localhost:8080/validatePatient',params);
          this.objj=res.data;
          let x = this.objj.Success;
          console.log()

        //   axios.post('http://localhost:8080/validatePatient', {
        //         patientId: this.username,
        //         pswd : this.password ,
            
        //          })
        //     // .then(res => this.objj=res.data)
        //      .then(res => x.json() =res.data.Success )
            
        //      .then(console.log(x))
             
        //     // .then(data => {})
        //     .catch(e => {
        //     this.errors.push(e)
        //     })
        //     // console.log(`this is api response ${res.data.Success}`)
        //     // console.log(``)
        //     console.log(x)
        if (x)
        {
            this.$router.push('PatientDashboard') 
        }
      
        }
  }
   
}
 

</script>

<style  scoped>

.regpatient
{
    background-color: white;
    height: 280px;
    width: 300px;
     border-radius: 25px;
  padding: 2em;
    margin: 5em auto;
  
  -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}


.signup{
    background-color: #126597; /* Green */
  border: none;
  color: white;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  /* margin: 4px 2px; */
  margin-left: 6em;
  cursor: pointer;
  border-radius: 12px;
  width: 100px;
  font-weight: bold;
}
#pl{
    text-align: center;
}
.inputfield {
       width: 15em;
    padding: 0.8em;
    /* border-radius: 0.5em; */
    border: none;
    border-bottom: 1px solid black;
}
ul{
    list-style-type: none;
}
</style>