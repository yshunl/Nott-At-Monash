$(document).ready(function () {
    
    $(".form_builder_area").sortable({
        cursor: 'move',
        placeholder: 'placeholder',
		revert: true,
        start: function (e, ui) {
            ui.placeholder.height(ui.helper.outerHeight());
        },
        stop: function (ev, ui) {
            getPreview();
        }
    });
	
	$(".form_bal_title").draggable({
        helper: function () {
            return getTitleHTML();
        },
        connectToSortable: ".form_builder_area",
		revert: "invalid"
    });
	
    $(".form_builder_area").disableSelection();
	function getTitleHTML() {
        var field = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button><div id="accordion"><div class="card"><button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Chapter 4.4</button><div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion"><div class="card-body"><li>Types of lipids</li><li>Saturated fats vs unsaturated fats</li><li>Formation of breakdown of fats & oils</li><br><h6>Assesment</h6><li><a href="https://image.slidesharecdn.com/tingkatan4bab4chemicalcomposition-150330060449-conversion-gate01/95/tingkatan-4-bab-4-chemical-composition-1-638.jpg?cb=1427695553" target="_blank"">Summative Test 1</a></li><br><h6>Videos</h6><li><a href="https://www.youtube.com/watch?v=_ExVXeovB6s" target="_blank">Structure of Lipids</a></li><li><a href="https://www.youtube.com/watch?v=brs2nMubr84" target="_blank">Saturated vs Unsaturated</a></li><br><h6>More Resources</h6><li><a href="school.html" target="_blank">SMK Seri Kembangan</a></li><li><a href="school2.html" target="_blank">SMK Seri Maluri</a></li></div></div></div></div></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').html(html);
    }


    $(document).on('keyup', '.s_opt', function () {
        var op_val = $(this).val();
        var field = $(this).closest('.row').attr('data-field');
        var option = $(this).closest('.row').attr('data-opt');
        $('select[name=select_' + field + ']').find('option[data-opt=' + option + ']').html(op_val);
        getPreview();
    });
    $(document).on('keyup', '.s_val', function () {
        var op_val = $(this).val();
        var field = $(this).closest('.row').attr('data-field');
        var option = $(this).closest('.row').attr('data-opt');
        $('select[name=select_' + field + ']').find('option[data-opt=' + option + ']').val(op_val);
        getPreview();
    });
    $(document).on('keyup', '.r_opt', function () {
        var op_val = $(this).val();
        var field = $(this).closest('.row').attr('data-field');
        var option = $(this).closest('.row').attr('data-opt');
        $('.radio_list_' + field).find('.r_opt_name_' + option).html(op_val);
        getPreview();
    });
    $(document).on('keyup', '.r_val', function () {
        var op_val = $(this).val();
        var field = $(this).closest('.row').attr('data-field');
        var option = $(this).closest('.row').attr('data-opt');
        $('.radio_list_' + field).find('input[data-opt=' + option + ']').val(op_val);
        getPreview();
    });
    $(document).on('keyup', '.c_opt', function () {
        var op_val = $(this).val();
        var field = $(this).closest('.row').attr('data-field');
        var option = $(this).closest('.row').attr('data-opt');
        $('.checkbox_list_' + field).find('.c_opt_name_' + option).html(op_val);
        getPreview();
    });
    $(document).on('keyup', '.c_val', function () {
        var op_val = $(this).val();
        var field = $(this).closest('.row').attr('data-field');
        var option = $(this).closest('.row').attr('data-opt');
        $('.checkbox_list_' + field).find('input[data-opt=' + option + ']').val(op_val);
        getPreview();
    });
    $(document).on('click', '.edit_bal_textfield', function () {
        var field = $(this).attr('data-field');
        var el = $('.field_extra_info_' + field);
        el.html('<div class="form-group"><input type="text" name="label_' + field + '" class="form-control" placeholder="Enter Text Field Label"/></div><div class="mt-checkbox-list"><label class="mt-checkbox mt-checkbox-outline"><input name="req_' + field + '" type="checkbox" value="1"> Required<span></span></label></div>');
        getPreview();
    });
    $(document).on('click', '.remove_bal_field', function (e) {
        e.preventDefault();
        var field = $(this).attr('data-field');
        $(this).closest('.li_' + field).hide('400', function () {
            $(this).remove();
            getPreview();
        });
    });
    $(document).on('click', '.remove_more_select', function () {
        var field = $(this).attr('data-field');
        $(this).closest('.select_row_' + field).hide('400', function () {
            $(this).remove();
            var options = '';
            $('.select_row_' + field).each(function () {
                var opt = $(this).find('.s_opt').val();
                var val = $(this).find('.s_val').val();
                var s_opt = $(this).attr('data-opt');
                options += '<option data-opt="' + s_opt + '" value="' + val + '">' + opt + '</option>';
            });
            $('select[name=select_' + field + ']').html(options);
            getPreview();
        });
    });
    $(document).on('click', '.remove_more_radio', function () {
        var field = $(this).attr('data-field');
        $(this).closest('.radio_row_' + field).hide('400', function () {
            $(this).remove();
            var options = '';
            $('.radio_row_' + field).each(function () {
                var opt = $(this).find('.r_opt').val();
                var val = $(this).find('.r_val').val();
                var s_opt = $(this).attr('data-opt');
                options += '<label class="mt-radio mt-radio-outline"><input data-opt="' + s_opt + '" type="radio" name="radio_' + field + '" value="' + val + '"> <p class="r_opt_name_' + s_opt + '">' + opt + '</p><span></span></label>';
            });
            $('.radio_list_' + field).html(options);
            getPreview();
        });
    });
    $(document).on('click', '.remove_more_checkbox', function () {
        var field = $(this).attr('data-field');
        $(this).closest('.checkbox_row_' + field).hide('400', function () {
            $(this).remove();
            var options = '';
            $('.checkbox_row_' + field).each(function () {
                var opt = $(this).find('.c_opt').val();
                var val = $(this).find('.c_val').val();
                var s_opt = $(this).attr('data-opt');
                options += '<label class="mt-checkbox mt-checkbox-outline"><input data-opt="' + s_opt + '" name="checkbox_' + field + '" type="checkbox" value="' + val + '"> <p class="r_opt_name_' + s_opt + '">' + opt + '</p><span></span></label>';
            });
            $('.checkbox_list_' + field).html(options);
            getPreview();
        });
    });
    $(document).on('keyup', '.form_input_button_class', function () {
        getPreview();
    });
    $(document).on('keyup', '.form_input_button_value', function () {
        getPreview();
    });
    $(document).on('change', '.form_input_req', function () {
        getPreview();
    });
    $(document).on('keyup', '.form_input_placeholder', function () {
        getPreview();
    });
    $(document).on('keyup', '.form_input_label', function () {
        getPreview();
    });
    $(document).on('keyup', '.form_input_name', function () {
        getPreview();
    });
    function generateField() {
        return Math.floor(Math.random() * (100000 - 1 + 1) + 57);
    }
	var title;
	var tablecolumn;
	var updatecolumn;
	var tablelabels;
	var box;
	var flagraised = 0;
	//name value pair or xml
	//loop through the function to construct everything at once instead of calling it every time to construct it
    function getPreview(plain_html = '') {
		var formbox = '';
		var tablelabel = '';
		var tablefield = '(';
		var updatefield = '';
        var el = $('.form_builder_area .form_output');
        var html = '<!DOCTYPE html><html lang="en-US"><head><title>Drag & Drop Bootstrap Form Builder</title><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" ><link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"><link rel="stylesheet" href="css/form_builder.css"/><style>body { background-color: #fafafa; }</style></head><body><div class="form_builder" style="margin-top: 25px">';
		
		
        el.each(function () {
			
            var data_type = $(this).attr('data-type');
            //var field = $(this).attr('data-field');
            var label = $(this).find('.form_input_label').val();
            var name = $(this).find('.form_input_name').val();
            if (data_type === 'text') {
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
				if (plain_html === 'save') {
				html += '<div class="col"><div class="form-group"><label class="control-label">' + label + '</label><input type="text" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/><div class="' + name + '"></div></div></div>';
				
				} 
				
				else {
				 html += '<div class="col"><div class="form-group"><label class="control-label">' + label + '</label><input type="text" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/><div class="' + name + '"></div></div></div>';
				 
				}
				tablelabel += label + ',';
               tablefield += name + " varchar(255),";
			   updatefield += name + ",";
			   formbox += 'text,';
            }
			
			if (data_type === 'title') {
                
				if (plain_html === 'save') {
				html += '<div class="col"><div class="form-group"><label class="control-label form-control-lg">' + label + '</label></div></div><form action="../updatedb.jsp"><div  class="col-md-4">';
				} 
				else {
				 html += '<div class="col"><div class="form-group"><label class="control-label form-control-lg">' + label + '</label></div></div><form action="../updatedb.jsp"><div  class="col-md-12">';
				}
				title = label;
               
            }
        });
				
				if (plain_html === 'save') {		
					html += '<input type="text" name="column" placeholder="" class="form-control" value="<%=columns%>" style="display:none" /><input type="text" name="title" placeholder="" class="form-control" value="<%=title%>" style="display:none" /><input type="number" id="count" name="count" placeholder="" class="form-control" value="<%=count%>" style="display:none" /><br></div><div class="col-md-4"><button type="submit" class="btn btn-primary pull-right">Submit</button><button type="button" class="btn btn-primary pull-right" id="addmore">Add More...</button></div></form>';
					
				}
				else{
					html += '<input type="text" name="column" placeholder="" class="form-control" value="<%=columns%>" style="display:none" /><input type="text" name="title" placeholder="" class="form-control" value="<%=title%>" style="display:none" /><input type="number" id="count" name="count" placeholder="" class="form-control" value="<%=count%>" style="display:none" /><br></div><div class="col-md-12"></div></form>';	
					
				}
				if (flagraised == 1){
					html += '<p><div class="col-md-4"><form action = "../upload.jsp" method = "post" enctype = "multipart/form-data"><input type="file" name="file" class="form-control-file" size="50" /><br><input type = "submit" value = "Upload File" /></form></div></p>';
					flagraised = 0;
				}
				
			
		html += '</div><script src="https://code.jquery.com/jquery-3.2.1.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script><script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script><script>document.getElementById("addmore").onclick = function(){var count = parseInt(document.getElementById("count").value) + 1;document.getElementById("count").value = count;<%while(index < columnslen){%>var html = \'<input type="text" name=\' + "<%=column1[index]%>" + \' placeholder="" class="form-control" />\';$(\'.\' + "<%=column1[index]%>").before(html);<%index++;}%>};</script></body></html>';
		
		tablefield += title + " int NOT NULL AUTO_INCREMENT, PRIMARY KEY(" + title + "));" ;
		updatefield +=  '.';
		tablecolumn = tablefield;
		updatecolumn = updatefield;
		tablelabels = tablelabel + '.';
		formbox += '.';
		box = formbox;
        
        if (plain_html === 'html') {
            $('.preview').hide();
            $('.plain_html').show().find('textarea').val(html);
			
		
        } else {
            $('.plain_html').hide();
            $('.preview').html(html).show();
		}
		if (plain_html === 'save'){
			$('.preview').hide();
			$.post( "createFormTempl.jsp",{ html: html,title: title,updatecolumn: updatecolumn}, function( data,status ) {
				alert("Form " + title + " Successfully Saved!");
				});
		}
		//
    }
    $(document).on('click', '.export_html', function () {
        getPreview('html');
    });
	
	$(document).on('click', '.savetemplate', function () {
		$.post( "CreateTBL.jsp",{title:title,tablecolumn: tablecolumn,tablefields: updatecolumn,formbox: box, formlabel:tablelabels}, function( data,status ) {
				getPreview('save');
				
				});
		
    });
	$(document).on('click', '#addmore', function () {
        
				var index = 0;
				
				var columns = updatecolumn.replace(",.","");
				columns = columns.split(",");
				var columnslen = columns.length;
				alert(columnslen);
				
				while(index < columnslen){
				var html = '<input type="text" name=' + columns[index] + ' placeholder="" class="form-control" />';
				$('.' + columns[index]).before(html);
				
				index++;
				}
				
    });
	
	
	
});