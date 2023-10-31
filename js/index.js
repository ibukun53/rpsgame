const ruleContainer = document.querySelector('.rule-container');
const ruleBtn = document.querySelector('.rule-btn');
const closeRuleDesktop = document.querySelector('.close-rule');
const closeRuleMobile = document.querySelector('.close-rule2');
const rule = () => {
  if (ruleContainer.classList.toggle('active')) {
    ruleContainer.classList.toggle('is-active');
  } else {
    ruleContainer.classList.toggle('is-active');
  }
};

ruleBtn.addEventListener('click', rule);
closeRuleDesktop.addEventListener('click', rule);
closeRuleMobile.addEventListener('click', rule);
