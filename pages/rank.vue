<template>
 <div id="bloc"> 
 <div id="rank"> 
 <h2> classement </h2> <br>
 <img class="trophy" src='~/assets/images/trophy.svg' >
 <table>

   <tr>
       <th>position</th>
       <th>pseudo</th>
       <th>score</th>
   </tr>
   <tr>
       <td>1</td>
       <td>carmou</td>
       <td>13000</td>
   </tr>
   <tr>
       <td>2</td>
       <td>cope</td>
       <td>12000</td>
   </tr>
   <tr>
       <td>3</td>
       <td>test</td>
       <td>11000</td>
   </tr>
   <tr>
       <td>4</td>
       <td>polou</td>
       <td>10000</td>
   </tr>
</table>
 </div> 
 <div id="dataUser"> 
 <p id="nextScore"> Prochaine récompense à <br> 15 000 </p> <br>
 <img class="arr" src="~/assets/images/arrow.svg"><br>
 <img title="30% de reduction pour votre prochain achat chez biocoop" class="promo" src="~/assets/images/biocoop.jpg">
 <p class="infoRank"> test position #3 dans le classement avec un score de 11 000 </p>

 </div> 
 </div> 
</template>

<script>
export default {
  data() {
    return {
      
    
    }
  }
}
</script>

<style lang="css">
#bloc
{
    display: flex; 
    flex-direction: column;
    margin: 0;
    width: 100%;
    height: 100%;

}
#dataUser , #rank 
{
    width: 100%;
    height: 100%;
}
th, tr, td{
    margin: 2px;
    border : 1px solid black;
}
#nextScore
{
    font-size : 1.4em;
    margin-top:10px;
}
.arr
{
    font-size: 0.2em;
    width: 20%;
}
.promo
{
    margin-top: 37px;
}
#dataUser{
    text-align: center;
}
.infoRank
{
    border: 1px solid;
    border-radius: 5px 5px 5px;
    margin-top: 85px;
    color: white;
}
#rank{
    text-align: center;
    margin-top: 50px;

}
table{
    margin: auto;
}
.trophy{
    width: 10%;
}
.trophy
{
    margin-bottom: 10px;
}
</style>
