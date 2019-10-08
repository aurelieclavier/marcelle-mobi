<template>
  <div class="user">
    <div class="userDetail">
      <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar_user" />
      <div class="userResume">
        <div class="userName">
          <p>Nom : Aurélie Clavier</p>
        </div>
        <div class="timelineUser">
          <step-progress :steps="gridGrade" :current-step="getGradeIndex" icon-class="fa fa-check"></step-progress>
        </div>
      </div>
    </div>

    <div class="userInfo">
      <p>
        Nombre de kilomètres parcourus :
        <span>1524 km</span>
      </p>
      <p>
        Emisision de CO² :
        <span>80g/km</span>
      </p>
    </div>
  </div>
</template>

<script>
import StepProgress from 'vue-step-progress'
import 'vue-step-progress/dist/main.css'
export default {
  components: {
    'step-progress': StepProgress
  },
  data() {
    return {
      gridGrade: ['Niveau 1', 'Niveau 2', 'Niveau 3', 'Niveau 4']
    }
  },
  computed: {
    getGrade: function() {
      return this.gridGrade[this.getGradeIndex]
    },
    getGradeIndex: function() {
      var pts = 1200

      if (pts <= 1500) {
        return 0
      } else if (pts > 1500 && pts <= 3000) {
        return 1
      } else if (pts > 3000 && pts <= 4500) {
        return 2
      } else if (pts > 4500) {
        return 3
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  .userDetail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      width: 30%;
      border-radius: 50%;
      margin: 0 auto;
    }
    .userResume {
      padding-top: 3rem;
      // .timelineUser {
      //   width: 40%;
      // }
    }
  }
  .userInfo {
    clear: both;
  }
}
</style>
