/*
 * Sonatype Nexus (TM) Open Source Version
 * Copyright (c) 2008-present Sonatype, Inc.
 * All rights reserved. Includes the third-party code listed at http://links.sonatype.com/products/nexus/oss/attributions.
 *
 * This program and the accompanying materials are made available under the terms of the Eclipse Public License Version 1.0,
 * which accompanies this distribution and is available at http://www.eclipse.org/legal/epl-v10.html.
 *
 * Sonatype Nexus (TM) Professional Version is available from Sonatype, Inc. "Sonatype" and "Sonatype Nexus" are trademarks
 * of Sonatype, Inc. Apache Maven is a trademark of the Apache Software Foundation. M2eclipse is a trademark of the
 * Eclipse Foundation. All other trademarks are the property of their respective owners.
 */
/*global Ext, NX*/

/**
 * @override Ext.grid.Panel
 *
 * Add a column menu to clear the sort state of a column if allowClearSort is set.
 *
 * @since 3.14
 */
Ext.define('NX.ext.grid.Panel', {
  override: 'Ext.grid.Panel',

  allowClearSort: false,

  initComponent: function() {
    this.callParent();

    if (this.allowClearSort) {
      this.on({
        headermenucreate: function(grid, menu) {
          var store = grid.getStore();
          menu.insert(2, [
            {
              text: 'Clear Sort',
              glyph: 'xf12d@FontAwesome' /* fa-eraser */,

              handler: function() {
                store.sorters.clear();
                store.load();
              }
            }
          ]);
        }
      });
    }
  }
});
