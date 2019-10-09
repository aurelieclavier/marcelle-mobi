<template>
  <div class="user">
    <div class="userDetail">
      <img src="~/assets/images/grandmother.svg" alt="avatar_user">
      <div class="userResume">
        <div class="userName">
          <h2>{{ $store.state.login.pseudo }}</h2>
        </div>
        <div class="timelineUser">
          <step-progress
            :activeColor="activeColor"
            :steps="gridGrade"
            :current-step="getGradeIndex"
            icon-class="fa fa-check"
          ></step-progress>
        </div>
        <p
          class="text-center mb-10"
        >Tu as récupéré : {{ $store.state.pointsCounter.counter }} points !</p>
        <p
          class="text-center mt-4"
        >Tu as parcourus : {{ $store.state.pointsCounter.kiloCounter }} kilomètres !</p>
        <!-- <p>{{ $store.state.pointsCounter.msg }}</p> -->
      </div>
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
      gridGrade: ['Débutant', 'Ecolo', 'Engagé', 'Expert'],
      activeColor: '#165f28'
    }
  },
  computed: {
    getGrade: function() {
      return this.gridGrade[this.getGradeIndex]
    },
    getGradeIndex: function() {
      let pts = this.$store.state.pointsCounter.counter
      if (pts <= 5000) {
        return 0
      } else if (pts > 5000 && pts <= 10000) {
        //   this.$store.mutations.pointsCounter.SET_FIRST_MESSAGE()
        return 1
      } else if (pts > 10000 && pts <= 15000) {
        // this.$store.state.pointsCounter.msg =
        //   'Bravo ! Tu as sauvé 3 bébés dauphins de Papouasie !'
        return 2
      } else if (pts > 15000) {
        // this.$store.state.pointsCounter.msg =
        //   'Bravo ! Tu as sauvé 5 bébés dauphins de Papouasie !  '
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
      width: 50%;
      border-radius: 50%;
      margin: 1.5rem auto;
    }
    p {
      font-weight: bold;
      color: white;
      padding: 2rem 0 0 0;
    }
    .userResume {
      .userName {
        h2 {
          color: white;
          text-align: center;
        }
      }
      .timelineUser {
        margin: 0 3rem;
        .step-progress__wrapper {
          width: 100%;
        }
      }
    }
  }
  .userInfo {
    clear: both;
  }
}
</style>
