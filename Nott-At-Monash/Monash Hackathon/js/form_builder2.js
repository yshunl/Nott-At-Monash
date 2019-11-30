$(document).ready(function () {
    $(".form_bal_textfield").draggable({
        helper: function () {
            return getTextFieldHTML();
        },
        connectToSortable: ".form_builder_area2"
    });
    $(".form_bal_textarea").draggable({
        helper: function () {
            return getTextAreaFieldHTML();
        },
        connectToSortable: ".form_builder_area2"
    });
    $(".form_bal_number").draggable({
        helper: function () {
            return getNumberFieldHTML();
        },
        connectToSortable: ".form_builder_area2"
    });
    $(".form_bal_email").draggable({
        helper: function () {
            return getEmailFieldHTML();
        },
        connectToSortable: ".form_builder_area2"
    });
    $(".form_bal_password").draggable({
        helper: function () {
            return getPasswordFieldHTML();
        },
        connectToSortable: ".form_builder_area2"
    });
    $(".form_bal_date").draggable({
        helper: function () {
            return getDateFieldHTML();
        },
        connectToSortable: ".form_builder_area2"
    });
    $(".form_bal_button").draggable({
        helper: function () {
            return getButtonFieldHTML();
        },
        connectToSortable: ".form_builder_area2"
    });
    $(".form_bal_select").draggable({
        helper: function () {
            return getSelectFieldHTML();
        },
        connectToSortable: ".form_builder_area2"
    });
    $(".form_bal_radio").draggable({
        helper: function () {
            return getRadioFieldHTML();
        },
        connectToSortable: ".form_builder_area2"
    });
    $(".form_bal_checkbox").draggable({
        helper: function () {
            return getCheckboxFieldHTML();
        },
        connectToSortable: ".form_builder_area2"
    });

    $(".form_builder_area2").sortable({
        cursor: 'move',
        placeholder: 'placeholder',
        start: function (e, ui) {
            ui.placeholder.height(ui.helper.outerHeight());
        },
        stop: function (ev, ui) {
            getPreview();
        }
    });
	$(".form_bal_file").draggable({
        helper: function () {
            return getFileFieldHTML();
        },
        connectToSortable: ".form_builder_area2"
    });
	$(".form_bal_title").draggable({
        helper: function () {
            return getTitleHTML();
        },
        connectToSortable: ".form_builder_area2"
    });
    $(".form_builder_area2").disableSelection();

    function getButtonFieldHTML() {
        var field = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div></div><hr/><div class="row li_row form_output" data-type="button" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="class_' + field + '" class="form-control form_input_button_class" placeholder="Class" value="btn btn-primary" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="value_' + field + '" data-field="' + field + '" class="form-control form_input_button_value" value="Submit" placeholder="Value"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="text_' + field + '" class="form-control form_input_name" placeholder="Name"/></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').html(html);
    }
    function getTextFieldHTML() {
        var field = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div></div><hr/><div class="row li_row form_output" data-type="text" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Label" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="placeholder_' + field + '" data-field="' + field + '" class="form-control form_input_placeholder" placeholder="Placeholder"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="text_' + field + '" class="form-control form_input_name" placeholder="Name"/></div></div><div class="col-md-12"><div class="form-check"><label class="form-check-label"><input data-field="' + field + '" type="checkbox" class="form-check-input form_input_req">Required</label></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').html(html);
    }
	function getTitleHTML() {
        var field = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div></div><hr/><div class="row li_row form_output" data-type="title" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Form Title" data-field="' + field + '"/></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').html(html);
    }
    function getNumberFieldHTML() {
        var field = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div></div><hr/><div class="row li_row form_output" data-type="number" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Number" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="placeholder_' + field + '" data-field="' + field + '" class="form-control form_input_placeholder" placeholder="Placeholder"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="text_' + field + '" class="form-control form_input_name" placeholder="Name"/></div></div><div class="col-md-12"><div class="form-check"><label class="form-check-label"><input data-field="' + field + '" type="checkbox" class="form-check-input form_input_req">Required</label></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').html(html);
    }
    function getEmailFieldHTML() {
        var field = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div></div><hr/><div class="row li_row form_output" data-type="email" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Email" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="placeholder_' + field + '" data-field="' + field + '" class="form-control form_input_placeholder" placeholder="Placeholder"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="text_' + field + '" class="form-control form_input_name" placeholder="Name"/></div></div><div class="col-md-12"><div class="form-check"><label class="form-check-label"><input data-field="' + field + '" type="checkbox" class="form-check-input form_input_req">Required</label></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').html(html);
    }
    function getPasswordFieldHTML() {
        var field = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div></div><hr/><div class="row li_row form_output" data-type="password" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Label" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="placeholder_' + field + '" data-field="' + field + '" class="form-control form_input_placeholder" placeholder="Placeholder"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="text_' + field + '" class="form-control form_input_name" placeholder="Name"/></div></div><div class="col-md-12"><div class="form-check"><label class="form-check-label"><input data-field="' + field + '" type="checkbox" class="form-check-input form_input_req">Required</label></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').html(html);
    }
    function getDateFieldHTML() {
        var field = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div></div><hr/><div class="row li_row form_output" data-type="date" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Date" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="text_' + field + '" class="form-control form_input_name" placeholder="Date"/></div></div><div class="col-md-12"><div class="form-check"><label class="form-check-label"><input data-field="' + field + '" type="checkbox" class="form-check-input form_input_req">Required</label></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').html(html);
    }
    function getTextAreaFieldHTML() {
        var field = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div></div><hr/><div class="row li_row form_output" data-type="textarea" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Label" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="placeholder_' + field + '" data-field="' + field + '" class="form-control form_input_placeholder" placeholder="Placeholder"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="text_' + field + '" class="form-control form_input_name" placeholder="Name"/></div></div><div class="col-md-12"><div class="form-check"><label class="form-check-label"><input data-field="' + field + '" type="checkbox" class="form-check-input form_input_req">Required</label></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').html(html);
    }
    function getSelectFieldHTML() {
        var field = generateField();
        var opt1 = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div><hr/><div class="row li_row form_output" data-type="select" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Label" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="text_' + field + '" class="form-control form_input_name" placeholder="Name"/></div></div><div class="col-md-12"><div class="form-group"><select name="select_' + field + '" class="form-control"><option data-opt="' + opt1 + '" value="Value">Option</option></select></div></div></div><div class="row li_row"><div class="col-md-12"><div class="field_extra_info_' + field + '"><div data-field="' + field + '" class="row select_row_' + field + '" data-opt="' + opt1 + '"><div class="col-md-4"><div class="form-group"><input type="text" value="Option" class="s_opt form-control"/></div></div><div class="col-md-4"><div class="form-group"><input type="text" value="Value" class="s_val form-control"/></div></div><div class="col-md-4"><i class="margin-top-5 fa fa-plus-circle fa-2x default_blue add_more_select" data-field="' + field + '"></i></div></div></div></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').html(html);
    }
    function getRadioFieldHTML() {
        var field = generateField();
        var opt1 = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div><hr/><div class="row li_row form_output" data-type="radio" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Label" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="text_' + field + '" class="form-control form_input_name" placeholder="Name"/></div></div><div class="col-md-12"><div class="form-group"><div class="mt-radio-list radio_list_' + field + '"><label class="mt-radio mt-radio-outline"><input data-opt="' + opt1 + '" type="radio" name="radio_' + field + '" value="Value"> <p class="r_opt_name_' + opt1 + '">Option</p><span></span></label></div></div></div></div><div class="row li_row"><div class="col-md-12"><div class="field_extra_info_' + field + '"><div data-field="' + field + '" class="row radio_row_' + field + '" data-opt="' + opt1 + '"><div class="col-md-4"><div class="form-group"><input type="text" value="Option" class="r_opt form-control"/></div></div><div class="col-md-4"><div class="form-group"><input type="text" value="Value" class="r_val form-control"/></div></div><div class="col-md-4"><i class="margin-top-5 fa fa-plus-circle fa-2x default_blue add_more_radio" data-field="' + field + '"></i></div></div></div></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').html(html);
    }
    function getCheckboxFieldHTML() {
        var field = generateField();
        var opt1 = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div><hr/><div class="row li_row form_output" data-type="checkbox" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Label" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="text_' + field + '" class="form-control form_input_name" placeholder="Name"/></div></div><div class="col-md-12"><div class="form-group"><div class="mt-checkbox-list checkbox_list_' + field + '"><label class="mt-checkbox mt-checkbox-outline"><input data-opt="' + opt1 + '" type="checkbox" name="checkbox_' + field + '" value="Value"> <p class="c_opt_name_' + opt1 + '">Option</p><span></span></label></div></div></div></div><div class="row li_row"><div class="col-md-12"><div class="field_extra_info_' + field + '"><div data-field="' + field + '" class="row checkbox_row_' + field + '" data-opt="' + opt1 + '"><div class="col-md-4"><div class="form-group"><input type="text" value="Option" class="c_opt form-control"/></div></div><div class="col-md-4"><div class="form-group"><input type="text" value="Value" class="c_val form-control"/></div></div><div class="col-md-4"><i class="margin-top-5 fa fa-plus-circle fa-2x default_blue add_more_checkbox" data-field="' + field + '"></i></div></div></div></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').html(html);
    }
	
	function getFileFieldHTML() {
	var field = generateField();
	var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field float-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div></div><hr/><div class="row li_row form_output" data-type="file" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Label" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><input type="file" name="label_' + field + '" class="form-control form_input_label" value="" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="text_' + field + '" class="form-control form_input_name" placeholder="Name"/></div></div><div class="col-md-12"><div class="form-check"><label class="form-check-label"><input data-field="' + field + '" type="checkbox" class="form-check-input form_input_req">Required</label></div></div></div>';
	
	return $('<div>').addClass('li_' + field + ' form_builder_field').html(html);
	}


    $(document).on('click', '.add_more_select', function () {
        $(this).closest('.form_builder_field').css('height', 'auto');
        var field = $(this).attr('data-field');
        var option = generateField();
        $('.field_extra_info_' + field).append('<div data-field="' + field + '" class="row select_row_' + field + '" data-opt="' + option + '"><div class="col-md-4"><div class="form-group"><input type="text" value="Option" class="s_opt form-control"/></div></div><div class="col-md-4"><div class="form-group"><input type="text" value="Value" class="s_val form-control"/></div></div><div class="col-md-4"><i class="margin-top-5 fa fa-plus-circle fa-2x default_blue add_more_select" data-field="' + field + '"></i><i class="margin-top-5 margin-left-5 fa fa-times-circle default_red fa-2x remove_more_select" data-field="' + field + '"></i></div></div>');
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
    $(document).on('click', '.add_more_radio', function () {
        $(this).closest('.form_builder_field').css('height', 'auto');
        var field = $(this).attr('data-field');
        var option = generateField();
        $('.field_extra_info_' + field).append('<div data-opt="' + option + '" data-field="' + field + '" class="row radio_row_' + field + '"><div class="col-md-4"><div class="form-group"><input type="text" value="Option" class="r_opt form-control"/></div></div><div class="col-md-4"><div class="form-group"><input type="text" value="Value" class="r_val form-control"/></div></div><div class="col-md-4"><i class="margin-top-5 fa fa-plus-circle fa-2x default_blue add_more_radio" data-field="' + field + '"></i><i class="margin-top-5 margin-left-5 fa fa-times-circle default_red fa-2x remove_more_radio" data-field="' + field + '"></i></div></div>');
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
    $(document).on('click', '.add_more_checkbox', function () {
        $(this).closest('.form_builder_field').css('height', 'auto');
        var field = $(this).attr('data-field');
        var option = generateField();
        $('.field_extra_info_' + field).append('<div data-opt="' + option + '" data-field="' + field + '" class="row checkbox_row_' + field + '"><div class="col-md-4"><div class="form-group"><input type="text" value="Option" class="c_opt form-control"/></div></div><div class="col-md-4"><div class="form-group"><input type="text" value="Value" class="c_val form-control"/></div></div><div class="col-md-4"><i class="margin-top-5 fa fa-plus-circle fa-2x default_blue add_more_checkbox" data-field="' + field + '"></i><i class="margin-top-5 margin-left-5 fa fa-times-circle default_red fa-2x remove_more_checkbox" data-field="' + field + '"></i></div></div>');
        var options = '';
        $('.checkbox_row_' + field).each(function () {
            var opt = $(this).find('.c_opt').val();
            var val = $(this).find('.c_val').val();
            var s_opt = $(this).attr('data-opt');
            options += '<label class="mt-checkbox mt-checkbox-outline"><input data-opt="' + s_opt + '" name="checkbox_' + field + '" type="checkbox" value="' + val + '"> <p class="c_opt_name_' + s_opt + '">' + opt + '</p><span></span></label>';
        });
        $('.checkbox_list_' + field).html(options);
        getPreview();
    });
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
	var texts;
	var numbers;
	var tablecolumn;
	var updatecolumn;
	var tablelabels;
	var box;
	
    function getPreview(plain_html = '') {
		var formbox = '';
		var tablelabel = '';
		var tablefield = '(';
		var updatefield = '';
        var el = $('.form_builder_area2 .form_output');
        var html = '<!DOCTYPE html><html lang="en-US"><head><title>Drag & Drop Bootstrap Form Builder</title><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous"><link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"><link rel="stylesheet" href="css/form_builder.css"/><style>body { background-color: #fafafa; }</style></head><body><div class="form_builder" style="margin-top: 25px">';
		
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
				html += '<div class="col-md-4"><div class="form-group"><label class="control-label">' + label + '</label><input type="text" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/></div></div>';
				
				} 
				else {
				 html += '<div class="col-md-10"><div class="form-group"><label class="control-label">' + label + '</label><input type="text" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/></div></div>';
				 
				}
				tablelabel += label + ',';
               tablefield += name + " varchar(255),";
			   updatefield += name + ",";
			   formbox += 'text,';
            }
			if (data_type === 'title') {
                
				if (plain_html === 'save') {
				html += '<div class="col-md-4"><div class="form-group"><label class="control-label form-control-lg">' + label + '</label></div></div><form action="../updatedb.jsp">';
				} 
				else {
				 html += '<div class="col-md-10"><div class="form-group"><label class="control-label form-control-lg">' + label + '</label></div></div><form action="../updatedb.jsp">';
				}
				title = label;
               
            }
            if (data_type === 'number') {
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
				if (plain_html === 'save') {
                html += '<div class="col-md-4"><div class="form-group"><label class="control-label">' + label + '</label><input type="number" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/></div></div>';
				
				}
				else{
				html += '<div class="col-md-10"><div class="form-group"><label class="control-label">' + label + '</label><input type="number" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/></div></div>';
				
				}
				tablefield += name + " int,";
				updatefield += name + ",";
				tablelabel += label + ',';
				formbox += 'number,';
            }
            if (data_type === 'email') {
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
				if (plain_html === 'save') {
                html += '<div class="col-md-4"><div class="form-group"><label class="control-label">' + label + '</label><input type="email" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/></div></div>';
				
				}
				else{
					html += '<div class="col-md-10"><div class="form-group"><label class="control-label">' + label + '</label><input type="email" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/></div></div>';
					
				}
				tablefield += name + " varchar(255)," ;
				updatefield += name + ",";
				tablelabel += label + ',';
				formbox += 'email,';
            }
            if (data_type === 'password') {
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
				if (plain_html === 'save') {
                html += '<div class="col-md-4"><div class="form-group"><label class="control-label">' + label + '</label><input type="password" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/></div></div>';
				
				}
				else{
					html += '<div class="col-md-10"><div class="form-group"><label class="control-label">' + label + '</label><input type="password" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/></div></div>';
				
				}
				tablefield += name + " varchar(255)," ;
				updatefield += name + ",";
				tablelabel += label + ',';
				formbox += 'password,';
            }
            if (data_type === 'textarea') {
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
				if (plain_html === 'save') {
                html += '<div class="col-md-4"><div class="form-group"><label class="control-label">' + label + '</label><textarea class="form-control" rows="5" name="' + name + '" placeholder="' + placeholder + '"  ' + required + '></textarea></div></div>';
			
				}
				else{
				html += '<div class="col-md-10"><div class="form-group"><label class="control-label">' + label + '</label><textarea class="form-control" rows="5" name="' + name + '" placeholder="' + placeholder + '"  ' + required + '></textarea></div></div>';	
				
				}
				tablefield += name + " text," ;
				updatefield += name + ",";
				tablelabel += label + ',';
				formbox += 'textarea,';
            }
            if (data_type === 'date') {
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
				if (plain_html === 'save') {
                html += '<div class="col-md-4"><div class="form-group"><label class="control-label">' + label + '</label><input type="date" name="' + name + '" class="form-control" ' + required + '/></div></div>';
				
				}
				else{
				html += '<div class="col-md-10"><div class="form-group"><label class="control-label">' + label + '</label><input type="date" name="' + name + '" class="form-control" ' + required + '/></div></div>';	
				
				}
				tablefield += name + " date," ;
				updatefield += name + ",";
				tablelabel += label + ',';
				formbox += 'date,';
            }
            if (data_type === 'button') {
                var btn_class = $(this).find('.form_input_button_class').val();
                var btn_value = $(this).find('.form_input_button_value').val();
				if (plain_html === 'save') {
                html += '<div class="col-md-4"><button name="' + name + '" type="submit" class="' + btn_class + '">' + btn_value + '</button></div>';
				}
				else{
				html += '<div class="col-md-10"><button name="' + name + '" type="submit" class="' + btn_class + '">' + btn_value + '</button></div>';	
				}
				
				
            }
            if (data_type === 'select') {
                var option_html = '';
                $(this).find('select option').each(function () {
                    var option = $(this).html();
                    var value = $(this).val();
                    option_html += '<option value="' + value + '">' + option + '</option>';
                });
				if (plain_html === 'save') {
                html += '<div class="col-md-4"><div class="form-group"><label class="control-label">' + label + '</label><select class="form-control" name="' + name + '">' + option_html + '</select></div></div>';
				}
				else{
				html += '<div class="col-md-10"><div class="form-group"><label class="control-label">' + label + '</label><select class="form-control" name="' + name + '">' + option_html + '</select></div></div>';	
				}
				tablefield += name + " varchar(255)," ;
				updatefield += name + ",";
				tablelabel += label + ',';
				formbox += 'select,';
            }
            if (data_type === 'radio') {
                var option_html = '';
				var options = 'RB';
                $(this).find('.mt-radio').each(function () {
                    var option = $(this).find('p').html();
                    var value = $(this).find('input[type=radio]').val();
                    option_html += '<div class="form-check"><label class="form-check-label"><input type="radio" class="form-check-input" name="' + name + '" value="' + option + '">' + option + '</label></div>';
					options += option + "RB";
                });
				if (plain_html === 'save') {
                html += '<div class="col-md-4"><div class="form-group"><label class="control-label">' + label + '</label>' + option_html + '</div></div>';
				}
				else{
				html += '<div class="col-md-10"><div class="form-group"><label class="control-label">' + label + '</label>' + option_html + '</div></div>';	
				}
				tablefield += name + options + " varchar(255)," ;
				updatefield += name + options + ",";
				tablelabel += label + ',';
				formbox += 'radio,';
            }
            if (data_type === 'checkbox') {
                var option_html = '';
				var options = 'CB';
                $(this).find('.mt-checkbox').each(function () {
                    var option = $(this).find('p').html();
                    var value = $(this).find('input[type=checkbox]').val();
                    option_html += '<div class="form-check"><label class="form-check-label"><input type="checkbox" class="form-check-input" name="' + option + '" value="' + option + '">' + option + '</label></div>';
					options += option + "CB";
                });
				if (plain_html === 'save') {
                html += '<div class="col-md-4"><div class="form-group"><label class="control-label">' + label + '</label>' + option_html + '</div></div>';
				}
				else{
				html += '<div class="col-md-10"><div class="form-group"><label class="control-label">' + label + '</label>' + option_html + '</div></div>';	
				}
				tablefield += name + options + " varchar(255)," ;
				updatefield += name + options + ",";
				tablelabel += label + ',';
				formbox += 'checkbox,';
            }
			if (data_type === 'file') {
				var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
				if (plain_html === 'save') {		
                html += '<div class="col-md-4"><div class="form-group"><label class="control-label">' + label + '</label><input type="file" name="' + name + '" class="form-control-file" ' + required + '/></div></div>';
				}
				else{
				html += '<div class="col-md-10"><div class="form-group"><label class="control-label">' + label + '</label><input type="file" name="' + name + '" class="form-control-file" ' + required + '/></div></div>';	
				}
				tablelabel += label + ',';
            }
			
        });
				if (plain_html === 'save') {		
					html += '<input type="text" name="column" placeholder="" class="form-control" value="<%=columns%>" style="display:none" /><input type="text" name="title" placeholder="" class="form-control" value="<%=title%>" style="display:none" /><br><div class="col-md-4"><button type="submit" class="btn btn-primary pull-right">Submit</button></div></form>';
					
				}
				else{
					html += '<input type="text" name="column" placeholder="" class="form-control" value="<%=columns%>" style="display:none" /><input type="text" name="title" placeholder="" class="form-control" value="<%=title%>" style="display:none" /><br><div class="col-md-10"><button type="submit" class="btn btn-primary pull-right">Submit</button></div></form>';	
					
				}
		html += '</div></body></html>';
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
	
	
});