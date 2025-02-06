document.getElementById('forgetPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
     
    const email = document.getElementById('email').value;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        alert("Please enter your email address.");
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
    } else {
        // هنا نفترض أنك ستمتد إلى API لإرسال البريد الإلكتروني
        // مثال بسيط:
        sendPasswordResetEmail(email)
            .then(response => {
                if (response.success) {
                    // عرض رسالة تأكيد
                    alert("A password reset link has been sent to your email address.");
                    
                    // مسح الحقل
                    document.getElementById('email').value = '';
                    
                    // إعادة توجيه المستخدم إلى صفحة أخرى (مثل صفحة تسجيل الدخول)
                    window.location.href = 'login.html'; // على سبيل المثال، العودة لصفحة تسجيل الدخول
                } else {
                    // في حال فشل إرسال البريد الإلكتروني
                    alert("Error: Unable to send password reset link. Please try again.");
                }
            })
            .catch(error => {
                // التعامل مع الأخطاء في الاتصال بـ API
                alert("An error occurred. Please try again later.");
            });
    }
});

// وظيفة وهمية لإرسال البريد الإلكتروني
function sendPasswordResetEmail(email) {
    // هذه دالة وهمية، في الواقع ستحتاج إلى ربطها بخادم يرسل الرابط
    return new Promise((resolve, reject) => {
        // محاكاة إرسال بريد إلكتروني بنجاح
        setTimeout(() => {
            resolve({ success: true });  // أو reject في حالة حدوث خطأ
        }, 2000);
    });
}

// العودة إلى صفحة تسجيل الدخول عند الضغط على "Back to Login"
document.getElementById('backToLogin').addEventListener('click', function() {
    window.location.href = 'login.html';  // العودة لصفحة تسجيل الدخول
});
