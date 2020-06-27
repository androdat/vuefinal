
<template>
   <div>
            <div class="regpatient">
                <h1 >REGISTER NEW DOCTOR</h1>
                <form action="#" method="POST">
                    <ul>
                        <li>
                            <label for="fname" class="label"> Name:</label>
                            <input type="text" id="fname" name="doctorname" class="inputfield"><br><br>
                        </li>
                        <li>
                            <label for="fname" class="label"> phno:</label>
                            <input type="text" id="fname" name="doctorphno" class="inputfield"><br><br>
                        </li>
                        <li>
                            <label for="fname" class="label"> Email:</label>
                            <input type="text" id="fname" name="doctoremail" class="inputfield"><br><br>
                        </li>
                        <li >
                            <label for="fname" class="label"> Address:</label>
                            <input type="text" id="fname" name="doctoraddress" class="inputfield"><br><br>
                        </li>
                        <li >
                            <label for="fname" class="label"> License number:</label>
                            <input type="text" id="fname" name="doctorlicensenumber" class="inputfield"><br><br>
                        </li>
                        <li>
                            <input type="submit" value="Register Doctor" name="doctor"  class="signup" id="reg">
                        </li>
                    </ul>
                </form>
        
            </div>
   </div>
</template>

<script>
export default {
    name: "regdoctor"
}
</script>

<style scoped>

</style>