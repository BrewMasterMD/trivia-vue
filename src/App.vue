<template>
  <div
    id="app"
  >
    <div
      v-if="isLoading"
      class="fixed flex items-center justify-center z-50 inset-y-0 inset-x-0"
    >
      <ThePreloader />
    </div>
    <div
      v-if="question"
      class="p-6 min-h-screen flex flex-col justify-center items-center"
    >
      <div class="text-right text-xl font-bold w-full mb-4">
        <span class="text-green">{{ questionsGuessed }}</span> / {{ questionsAnswered }}
      </div>
      <code
        class="rounded-md p-4 min-h-24 flex items-center justify-center text-center bg-gray  w-full"
        v-html="question.text"
      />
      <div class="relative min-w-full flex flex-wrap my-2">
        <BaseButton
          v-for="(answer, i) in question.answers"
          :key="i"
          class="my-2 w-full flex-grow md:w-2/5 md:odd:mr-2 md:even:ml-2"
          :class="{
            'bg-green': hasAnswered && answer.isCorrect,
            'bg-red': hasAnswered && !answer.isCorrect,
            'border-green': hasAnswered && answer.isCorrect && selectedAnswer !== answer.option,
            'border-red': hasAnswered && !answer.isCorrect && selectedAnswer !== answer.option,
          }"
          :disabled="isLoading || hasAnswered"
          @click.native="handleAnswer(answer)"
          v-html="answer.option"
        />
      </div>
      <div class="w-full text-right mt-4">
        <BaseButton
          class="px-12 w-full md:w-auto"
          :disabled="isLoading || !hasAnswered"
          @click.native="getQuestion"
        >
          Next
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions, mapMutations } from 'vuex';
import { QUESTION_GETTER } from './store/getters';
import { INCREMENT_QUESTIONS_MUTATION } from './store/mutations';
import {
  GET_TOKEN_ACTION,
  GET_QUESTION_ACTION,
} from './store/actions';
import ThePreloader from './components/ThePreloader.vue';
import BaseButton from './components/BaseButton.vue';

export default {
  name: 'App',
  components: {
    ThePreloader,
    BaseButton,
  },
  data() {
    return ({
      selectedAnswer: '',
    });
  },
  computed: {
    ...mapState(['isLoading', 'questionsAnswered', 'questionsGuessed', 'token', 'hasAnswered']),
    ...mapGetters({
      question: QUESTION_GETTER,
    }),
  },
  created() {
    this.getToken();
  },
  methods: {
    ...mapActions({
      getToken: GET_TOKEN_ACTION,
      getQuestion: GET_QUESTION_ACTION,
    }),
    ...mapMutations({
      incrementQuestions: INCREMENT_QUESTIONS_MUTATION,
    }),
    handleAnswer(answer) {
      this.selectedAnswer = answer.option;
      this.incrementQuestions(answer.isCorrect);
    },
  },
};
</script>

<style>
@import "~tailwindcss/base.css";
@import "~tailwindcss/components.css";
@import "~tailwindcss/utilities.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
