HEAD

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'  // 设置平滑滚动
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const emailButton = document.getElementById('email-button');
    const emailAddress = "newthread_geek@outlook.com"; 
    emailButton.addEventListener('click', function () {
        // 当按键被点击事件发生后复制邮箱到剪贴板
        navigator.clipboard.writeText(emailAddress)
            .then(() => {
                //弹出提示框
                alert("Geek邮箱地址已复制到剪贴板:!^^");
            });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // 获取所有问题和回答元素
    const questions = document.querySelectorAll(".QA-question");
    const answers = document.querySelectorAll(".QA-answer");

    // 初始隐藏所有回答
    answers.forEach((answer) => {
        answer.style.display = "none"; // 默认隐藏
    });

    // 为每个问题绑定点击事件
    questions.forEach((question, index) => {
        question.addEventListener("click", () => {
            // 当前问题的回答
            const answer = answers[index];

            // 收起其他回答
            answers.forEach((otherAnswer, i) => {
                if (i !== index) {
                    otherAnswer.style.display = "none"; // 隐藏其他回答
                }
            });

            // 切换当前回答的显示状态
            answer.style.display = (answer.style.display === "block") ? "none" : "block";
        });
    })；
