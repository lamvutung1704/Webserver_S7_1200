
// Hàm chức năng chuyển trang
function fn_ScreenChange(scr_1, scr_2, scr_3)
{
    document.getElementById(scr_1).style.visibility = 'visible';   // Hiển thị trang được chọn
    document.getElementById(scr_2).style.visibility = 'hidden';    // Ẩn trang 1
    document.getElementById(scr_3).style.visibility = 'hidden';    // Ẩn trang 2
}


// Hàm chức năng ghi giá trị tag
function setTag(tag,val) {
    var tag_Link = '"web_commucation".' + tag;
    var url = "IO.html";
    sdata = tag_Link + '=' + val;
    $.post(url, sdata, function (result2) { });
}
 
// Hàm chức năng đọc giá trị tag
function IOField(ObjectID, tag) {
    url = "IO.html";
    $.getJSON(url, function (result) {
        document.getElementById(ObjectID).value = result[tag];
    });
}
// HIỂN THỊ DỮ LIỆU LÊN IO FIELD
setInterval(function () {
    if(tag_Edit_Enable == false){
    // IO Field - Màn hình chính (Actual value)
    // tag_Bool là tên tag trong khối DB, tbx_tag_bool là địa chỉ id trong input của index.html
    IOField("tbx_Sp_pass_set", "Sp_pass_set"); // hiển thị dữ liệu trên textbox của nhập số lượng sản phẩm pass
    IOField("tbx_Sp_pass", "Sp_pass"); // hiển thị số sản phẩm đã đạt
    IOField("tbx_Sp_sum", "Sp_sum");
    IOField("tbx_Sp_fail", "Sp_fail");
    }    
    // HIển thị symbol của hệ thống phân loại
    Motor_Status('Motor','Motor','Motor')
    Green_Status('Green','Green','Green_light')
    Red_Status('Red','Red','Red_light')
    Yellow_Status('Yellow','Yellow','Yellow_light')
    Induc_Status('SensorInduc','SensorInduc','CB_Induc')
    IR_Status('SensorIR','sensorIR','CB_IR') 
    Actuator_Status('Actuator','Actuator','Actuator')
    phoiIR_Status('sp','sp','CB_IR')
    phoi_induc_Status('spfail','spfail','CB_Induc')
}, 1000); // 1000ms thì cập nhật dữ liệu lên IOField 1 lần
function fn_DataEdit(button1, button2) // hàm có chức năng hiển thị nút sửa và ẩn bút edit và ngược lại
{
    document.getElementById(button1).style.zIndex='1';  // Hiển nút 1
    document.getElementById(button2).style.zIndex='0';  // Ẩn nút 2
}

// Tag Edit
var tag_Edit_Enable = false;
// edit số lượng sản phẩm pass theo ý muốn//
function Edit_Sp_pass_set(){
    fn_DataEdit("Save", "Edit") // hàm chức năng edit với đầu vào là  save và  edit
    tag_Edit_Enable = true;
    // Enable chức năng IO Field
    document.getElementById("tbx_Sp_pass_set").disabled = false;// trạng thái của disabled là fassle => cho phép sửa tại textbox
  
}
function Save_Sp_pass_set(){
    fn_DataEdit("Edit", "Save")
    tag_Edit_Enable = false; // lưu thì không thể sửa dữ liệu tại textbox...muốn sửa thì phải ấn nút sửa
    // Set giá trị tag
    var tag_Sp_pass_set_data = document.getElementById("tbx_Sp_pass_set").value;// Lấy giá trị từ textbox của ô nhập số lượng sản phẩm pass
    setTag('Sp_pass_set',tag_Sp_pass_set_data);
 
    // Disable chức năng IO field
    document.getElementById("tbx_Sp_pass_set").disabled = true;
    alert('Dữ liệu đã được lưu!');
}
//Symbol factory//
 // Hàm chức năng hiển thị trạng thái symbol
function fn_SymbolStatus(ObjectID, SymName, Tag)
{
    var imglink_0 = "images/Symbol/" + SymName + "_0.png"; // Trạng thái tag = 0
    var imglink_1 = "images/Symbol/" + SymName + "_1.png"; // Trạng thái tag = 1
    
    url = "IO.html";
    $.getJSON(url, function (result) {
        if (result[Tag] == 0)
        {
            document.getElementById(ObjectID).src = imglink_0;
        }
        else if (result[Tag] == 1)
        {
            document.getElementById(ObjectID).src = imglink_1;
        }        
    });
}
//hàm hiển thị trạng thái của động cơ
function Motor_Status(MotorID, SymName_motor, Tag_motor)
{
    var motorlink_0 = "images/Symbol/" + SymName_motor + "_0.png"; // Trạng thái tag = 0
    var motorlink_1 = "images/Symbol/" + SymName_motor + "_1.png"; // Trạng thái tag = 1
    
    url = "IO.html";
    $.getJSON(url, function (result) {
        if (result[Tag_motor] == 0)
        {
            document.getElementById(MotorID).src = motorlink_0;
        }
        else if (result[Tag_motor] == 1)
        {
            document.getElementById(MotorID).src = motorlink_1;
        }        
    });
}
//hàm hiển thị trạng thái của đèn xanh
function Green_Status(GreenID, SymName_green, Tag_green)
{
    var greenlink_0 = "images/Symbol/" + SymName_green + "_0.png"; // Trạng thái tag = 0
    var greenlink_1 = "images/Symbol/" + SymName_green+ "_1.png"; // Trạng thái tag = 1
    
    url = "IO.html";
    $.getJSON(url, function (result) {
        if (result[Tag_green] == 0)
        {
            document.getElementById(GreenID).src = greenlink_0;
        }
        else if (result[Tag_green] == 1)
        {
            document.getElementById(GreenID).src = greenlink_1;
        }        
    });
}
//hàm hiển thị trạng thái của đèn đỏ
function Red_Status(RedID, SymName_red, Tag_red)
{
    var redlink_0 = "images/Symbol/" + SymName_red + "_0.png"; // Trạng thái tag = 0
    var redlink_1 = "images/Symbol/" + SymName_red + "_1.png"; // Trạng thái tag = 1
    
    url = "IO.html";
    $.getJSON(url, function (result) {
        if (result[Tag_red] == 0)
        {
            document.getElementById(RedID).src = redlink_0;
        }
        else if (result[Tag_red] == 1)
        {
            document.getElementById(RedID).src = redlink_1;
        }        
    });
}
//hàm hiển thị trạng thái của đèn vàng
function Yellow_Status(YellowID, SymName_yellow, Tag_yellow)
{
    var yellowlink_0 = "images/Symbol/" + SymName_yellow + "_0.png"; // Trạng thái tag = 0
    var yellowlink_1 = "images/Symbol/" + SymName_yellow + "_1.png"; // Trạng thái tag = 1
    
    url = "IO.html";
    $.getJSON(url, function (result) {
        if (result[Tag_yellow] == 0)
        {
            document.getElementById(YellowID).src = yellowlink_0;
        }
        else if (result[Tag_yellow] == 1)
        {
            document.getElementById(YellowID).src = yellowlink_1;
        }
    });
}
//hàm hiển thị trạng thái của sensorInduc
function Induc_Status(InducID, SymName_induc, Tag_induc)
{
    var induclink_0 = "images/Symbol/" + SymName_induc + "_0.png"; // Trạng thái tag = 0
    var induclink_1 = "images/Symbol/" + SymName_induc + "_1.png"; // Trạng thái tag = 1    
    url = "IO.html";    
    $.getJSON(url, function (result) {
        if (result[Tag_induc] == 0)
        {
            document.getElementById(InducID).src = induclink_0;
        }
        else if (result[Tag_induc] == 1)
        {
            document.getElementById(InducID).src = induclink_1;
        }        
    });
}
//hàm hiển thị trạng thái của sensorIR 
function IR_Status(IRID, SymName_IR, Tag_IR)
{
    var IRlink_0 = "images/Symbol/" + SymName_IR + "_0.png"; // Trạng thái tag = 0
    var IRlink_1 = "images/Symbol/" + SymName_IR + "_1.png"; // Trạng thái tag = 1    
    url = "IO.html";    
    $.getJSON(url, function (result) {
        if (result[Tag_IR] == 0)
        {
            document.getElementById(IRID).src = IRlink_0;
        }
        else if (result[Tag_IR] == 1)
        {
            document.getElementById(IRID).src = IRlink_1;
        }        
    });
}
//hàm hiển thị tạng thái tay gạt
function Actuator_Status(ActuatorID, SymName_actuator, Tag_actuator)
{
    var actuatorlink_0 = "images/Symbol/" + SymName_actuator + "_0.png"; // Trạng thái tag = 0
    var actuatorlink_1 = "images/Symbol/" + SymName_actuator+ "_1.png"; // Trạng thái tag = 1    
    url = "IO.html";
    $.getJSON(url, function (result) {
        if (result[Tag_actuator] == 0)
        {
            document.getElementById(ActuatorID).src = actuatorlink_0;
        }
        else if (result[Tag_actuator] == 1)
        {
            document.getElementById(ActuatorID).src = actuatorlink_1;
        }        
    });
} 
