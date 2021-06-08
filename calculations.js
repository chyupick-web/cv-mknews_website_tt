function CalculateOnTheFly(obj)
{
    var current = new Number(document.calories.total.value);
    if (obj.checked == true )
		{
			document.calories.total.value  = current + new Number(obj.value);
		}
	    else
		{
			document.calories.total.value  = current - new Number(obj.value);
		}
}
function CalculateCalories() {
    var ycount = document.calories.yemek.length;
    var total = 0;
    for (i = 0; i < ycount; i++) {
        if (document.calories.yemek[i].checked == true) {
            total = new Number(total) + new Number(document.calories.yemek[i].value);
        }
    }
    document.calories.total.value = total;
    document.calories.total1.value = total;
}
function ClearAll() {
    var ycount = document.calories.yemek.length;
    for (i = 0; i < ycount; i++)
        document.calories.yemek[i].checked = false;
    document.calories.total.value = 0;
    document.calories.total1.value = 0;
}

function ClearForm(form) {
    form.weight.value = "";
    form.height.value = "";
    form.bmi.value = "";
}

function bmi(weight, height) {

          bmindx=weight/eval(height*height);

          return bmindx;
}

function checkform(form) {

    if (form.weight.value == null || form.weight.value.length == 0 || form.height.value == null || form.height.value.length == 0) {

        alert("\n Lütfen ilk önce formu doldurunuz.");

        return false;

    }

    else if (parseFloat(form.height.value) <= 0 ||

                parseFloat(form.height.value) >= 500 ||

                parseFloat(form.weight.value) <= 0 ||

                parseFloat(form.weight.value) >= 500) {

        alert("\nSanırız değerleri girerken bir hata yaptınız. \nLütfen değerleri yeniden giriniz. \nBoyunuz ve kilonuzun  Kg ve Cm değerinde olmasına dikkat ediniz \n");
        ClearForm(form);
        return false;
    }
       return true;
}

function computeform(form) {
       if (checkform(form)) {
       yourbmi=(bmi(form.weight.value, form.height.value/100));
       form.bmi.value=yourbmi;
       }
       return;
}