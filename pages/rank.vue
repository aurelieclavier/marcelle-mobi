<template>
  <div id="bloc">
    <div id="rank">
      <h2>Classement</h2>
      <br />
      <img class="trophy" src="~/assets/images/trophy.svg" />
      <table>
        <tr>
          <th>Position</th>
          <th>Pseudo</th>
          <th>Score</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Carmou</td>
          <td>13000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Cope</td>
          <td>12000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Test</td>
          <td>11000</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Polou</td>
          <td>10000</td>
        </tr>
      </table>
    </div>
    <div id="dataUser">
      <p id="nextScore">
        Prochaine récompense à
        <br />15 000 points
      </p>
      <br />
      <img class="arr" src="~/assets/images/arrow.svg" />
      <br />
      <img
        title="30% de reduction pour votre prochain achat chez biocoop"
        class="promo"
        src="~/assets/images/biocoop.jpg"
      />
      <p class="infoRank">Prochain rang atteint dans 12672 points !</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="css">
#bloc {
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  height: 100%;
  color: white;
}
#dataUser,
#rank {
  width: 100%;
  height: 100%;
}
th,
tr,
td {
  margin: 2px;
  border: 1px solid black;
  padding: 1rem;
}
#nextScore {
  font-size: 1.4em;
  margin-top: 10px;
}
.arr {
  font-size: 0.2em;
  width: 20%;
}
.promo {
  margin-top: 37px;
  width: 30%;
}
#dataUser {
  text-align: center;
}
.infoRank {
  border: 1px solid white;
  border-radius: 5px 5px 5px;
  margin-top: 85px;
  color: white;
}
#rank {
  text-align: center;
  margin-top: 50px;
}
table {
  margin: auto;
}
.trophy {
  width: 10%;
}
.trophy {
  margin-bottom: 10px;
}
</style>
