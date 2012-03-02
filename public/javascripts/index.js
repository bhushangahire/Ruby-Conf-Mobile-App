ListDemo = new Ext.Application({
    name: "ListDemo",

    launch: function() {

        ListDemo.detailPanel = new Ext.Panel({
            id: 'detailpanel',
            tpl: '{description}'
        });

        ListDemo.listPanel = new Ext.List({
            id: 'disclosurelist',
	    layout: 'fit',
            store: ListDemo.ListStore,
            itemTpl: '<div class="contact">{time} : {task} </div>',	    
            grouped: true,
	    flex: 1,
            onItemDisclosure: function(record, btn, index) {
                ListDemo.detailPanel.update(record.data);
                ListDemo.Viewport.setActiveItem('detailpanel');
            }

        });


        ListDemo.Viewport = new Ext.Panel ({
            fullscreen: true,
            layout: 'fit',
            cardSwitchAnimation: {
		    type: 'slide',
		    cover: false
		},
	defaults: {
		    scroll: 'vertical'
		},
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


