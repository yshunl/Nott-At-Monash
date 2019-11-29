$(document).on('click', '.display2', function () {
        previewForm();
    });
	
function previewForm() {
		var title;
		var texts;
		var numbers;
		var tablecolumn;
		var updatecolumn;
		var tablefield = '(';
		var updatefield = '';
		var html = '';
        var el = $('.form_builder_area .form_output');
			
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
				
				 html += '<div class="col-md-12"><div class="form-group"><label class="control-label">' + label + '</label><input type="text" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/></div></div>';
				 
				
               tablefield += name + " varchar(255),";
			   updatefield += name + ",";
            }
			if (data_type === 'title') {
                

				 html += '<div class="col-md-12"><div class="form-group"><label class="control-label form-control-lg">' + label + '</label></div></div><form action="../updatedb.jsp">';
				
				title = label;
               
            }
            if (data_type === 'number') {
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }

				
				html += '<div class="col-md-12"><div class="form-group"><label class="control-label">' + label + '</label><input type="number" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/></div></div>';
				
				
				tablefield += name + " int,";
				updatefield += name + ",";
            }
            if (data_type === 'email') {
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }		
					html += '<div class="col-md-12"><div class="form-group"><label class="control-label">' + label + '</label><input type="email" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/></div></div>';
					
				
				tablefield += name + " varchar(255)," ;
				updatecolumn += name + ",";
            }
            if (data_type === 'password') {
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }

				
					html += '<div class="col-md-12"><div class="form-group"><label class="control-label">' + label + '</label><input type="password" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/></div></div>';
				
				
				tablefield += name + " varchar(255)," ;
				updatefield += name + ",";
            }
            if (data_type === 'textarea') {
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
			
				
				html += '<div class="col-md-12"><div class="form-group"><label class="control-label">' + label + '</label><textarea class="form-control" rows="5" name="' + name + '" placeholder="' + placeholder + '"  ' + required + '></textarea></div></div>';	
				
				
				tablefield += name + " text," ;
				updatefield += name + ",";
            }
            if (data_type === 'date') {
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
				
				html += '<div class="col-md-12"><div class="form-group"><label class="control-label">' + label + '</label><input type="date" name="' + name + '" class="form-control" ' + required + '/></div></div>';	
				
				
				tablefield += name + " date," ;
				updatefield += name + ",";
            }
            if (data_type === 'button') {
                var btn_class = $(this).find('.form_input_button_class').val();
                var btn_value = $(this).find('.form_input_button_value').val();
				
				html += '<div class="col-md-12"><button name="' + name + '" type="submit" class="' + btn_class + '">' + btn_value + '</button></div>';	
				
				
				
            }
            if (data_type === 'select') {
                var option_html = '';
                $(this).find('select option').each(function () {
                    var option = $(this).html();
                    var value = $(this).val();
                    option_html += '<option value="' + value + '">' + option + '</option>';
                });
			
				html += '<div class="col-md-12"><div class="form-group"><label class="control-label">' + label + '</label><select class="form-control" name="' + name + '">' + option_html + '</select></div></div>';	
				
            }
            if (data_type === 'radio') {
                var option_html = '';
                $(this).find('.mt-radio').each(function () {
                    var option = $(this).find('p').html();
                    var value = $(this).find('input[type=radio]').val();
                    option_html += '<div class="form-check"><label class="form-check-label"><input type="radio" class="form-check-input" name="' + name + '" value="' + value + '">' + option + '</label></div>';
                });
				
				
				html += '<div class="col-md-12"><div class="form-group"><label class="control-label">' + label + '</label>' + option_html + '</div></div>';	
				
            }
            if (data_type === 'checkbox') {
                var option_html = '';
                $(this).find('.mt-checkbox').each(function () {
                    var option = $(this).find('p').html();
                    var value = $(this).find('input[type=checkbox]').val();
                    option_html += '<div class="form-check"><label class="form-check-label"><input type="checkbox" class="form-check-input" name="' + name + '[]" value="' + value + '">' + option + '</label></div>';
                });
				
				html += '<div class="col-md-12"><div class="form-group"><label class="control-label">' + label + '</label>' + option_html + '</div></div>';	
				
            }
			if (data_type === 'file') {
				var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
						
               
				
				html += '<div class="col-md-12"><div class="form-group"><label class="control-label">' + label + '</label><input type="file" name="' + name + '" class="form-control-file" ' + required + '/></div></div>';	
				
            }
			
       
			html += '<div class="col-md-12"><div class="form-group"><label class="control-label">' + label + '</label><input type="text" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/></div></div>';	
					
				
		html += '</div></body></html>';
		tablefield += title + " int NOT NULL AUTO_INCREMENT, PRIMARY KEY(" + title + "));" ;
		updatefield +=  '.';
		tablecolumn = tablefield;
		updatecolumn = updatefield;
        
		      
            $('.display').html(html).show();
		
		//
    }