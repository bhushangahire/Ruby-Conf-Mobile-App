ListDemo = new Ext.Application({
    name: "ListDemo",

    launch: function() {

        ListDemo.detailPanel = new Ext.Panel({
            id: 'detailpanel',
            tpl: '{description}'
        });

        ListDemo.listPanel = new Ext.List({
            id: 'disclosurelist',
            store: ListDemo.ListStore,
            itemTpl: '<div class="contact">{time} : {task} </div>',	    
            grouped: true,
	    flex: 1,
            onItemDisclosure: function(record, btn, index) {
                ListDemo.detailPanel.update(record.data);
                ListDemo.Viewport.setActiveItem('detailpanel');
            }

        });

/*

,
            onItemDisclosure: function(record, btn, index) {
                ListDemo.detailPanel.update(record.data);
                ListDemo.Viewport.setActiveItem('detailpanel');
            }

*/


/*

var app =  new Ext.Panel({
        fullscreen: true,
        layout: {
           type: 'vbox',
           align: 'stretch'
        },
        dockedItems:[{
            xtype: 'toolbar',
            title: 'Ruby Conf 2012',

        }],
        items: [
        {
            xtype: 'panel',
            title:'topPanel',
            height: 50,
            items:{
                xtype:'button',
                cls: 'editChildBtn',
                text: 'Einstellungen',
                width: 150,
                handler: function(){}
            }
        },
        {
            xtype: 'list',
            flex: 1,
            style: 'background-color: Transparent;',
            id: 'MyList',
            allowDeselect: true,
            clearSelectionOnDeactivate: true,
            //layout: 'fit',
            store: simfla.ux.plugins.demo.store,
            itemTpl: '{firstName} <strong>{lastName}</strong>',
            grouped: false,
            indexBar: false,
            singleSelect: true,
            }]
        });



*/





        ListDemo.Viewport = new Ext.Panel ({
            fullscreen: true,
            layout: 'card',
            cardSwitchAnimation: 'slide',
	    dockedItems: [{
		    xtype: 'toolbar',
		    title: 'Ruby Conf 2012',
		    ui: 'dark',
		    dock: 'top',
		    items: [{
                        text: 'Home',
                        ui: 'home',
			iconMask: true,
                        handler: function() {
                            ListDemo.Viewport.setActiveItem('disclosurelist', {type:'slide', direction:'right'});
                        }
                    }]
		}],
            items: [ListDemo.listPanel, ListDemo.detailPanel]
        });

    }
});


