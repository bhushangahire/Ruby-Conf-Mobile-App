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
            itemTpl: '<div class="contact"><span id="time">{time}</span> : {task} </div>',	    
            grouped: true,
	    flex: 1,
            onItemDisclosure: function(record, btn, index) {
                ListDemo.detailPanel.update(record.data);
                ListDemo.Viewport.setActiveItem('detailpanel');
            }

        });


        ListDemo.Viewport = new Ext.Panel ({
            fullscreen: true,
            layout: 'card',
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
                    },{
                        text: 'Sort Track',
                        ui: 'sort',
			iconMask: true,
                        handler: function() {
                            ListDemo.ListStore.sort('task');
			    ListDemo.Viewport.doLayout();
                        }
                    }

		]
		}],
            items: [ListDemo.listPanel, ListDemo.detailPanel]
        });

    }
});


