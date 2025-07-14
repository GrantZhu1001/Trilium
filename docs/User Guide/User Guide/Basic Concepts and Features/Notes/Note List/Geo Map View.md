# Geo Map View
> [!IMPORTANT]
> Starting with Trilium v0.97.0, the geo map has been converted from a standalone [note type](../../../Note%20Types.md) to a type of view for the <a class="reference-link" href="../Note%20List.md">Note List</a>. 

<figure class="image image-style-align-center"><img style="aspect-ratio:892/675;" src="9_Geo Map View_image.png" width="892" height="675"></figure>

This note type displays the children notes on a geographical map, based on an attribute. It is also possible to add new notes at a specific location using the built-in interface.

## Creating a new geo map

<figure class="table"><table><thead><tr><th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th></tr></thead><tbody><tr><td>1</td><td><figure class="image"><img style="aspect-ratio:483/413;" src="15_Geo Map View_image.png" width="483" height="413"></figure></td><td>Right click on any note on the note tree and select <em>Insert child note</em> → <em>Geo Map (beta)</em>.</td></tr><tr><td>2</td><td><figure class="image image-style-align-center image_resized" style="width:53.44%;"><img style="aspect-ratio:1720/1396;" src="8_Geo Map View_image.png" width="1720" height="1396"></figure></td><td>By default the map will be empty and will show the entire world.</td></tr></tbody></table></figure>

## Repositioning the map

*   Click and drag the map in order to move across the map.
*   Use the mouse wheel, two-finger gesture on a touchpad or the +/- buttons on the top-left to adjust the zoom.

The position on the map and the zoom are saved inside the map note and restored when visiting again the note.

## Adding a marker using the map

### Adding a new note using the plus button

<figure class="table"><table><thead><tr><th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th></tr></thead><tbody><tr><td>1</td><td>To create a marker, first navigate to the desired point on the map. Then press the <img src="10_Geo Map View_image.png"> button in the&nbsp;<a href="../../UI%20Elements/Floating%20buttons.md">Floating buttons</a>&nbsp;(top-right) area.&nbsp;<br><br>If the button is not visible, make sure the button section is visible by pressing the chevron button (<img src="17_Geo Map View_image.png">) in the top-right of the map.</td><td>&nbsp;</td></tr><tr><td>2</td><td><img class="image_resized" style="aspect-ratio:1730/416;width:100%;" src="2_Geo Map View_image.png" width="1730" height="416"></td><td>Once pressed, the map will enter in the insert mode, as illustrated by the notification.&nbsp;&nbsp;&nbsp;&nbsp;<br><br>Simply click the point on the map where to place the marker, or the Escape key to cancel.</td></tr><tr><td>3</td><td><img class="image_resized" style="aspect-ratio:1586/404;width:100%;" src="7_Geo Map View_image.png" width="1586" height="404"></td><td>Enter the name of the marker/note to be created.</td></tr><tr><td>4</td><td><img class="image_resized" style="aspect-ratio:1696/608;width:100%;" src="16_Geo Map View_image.png" width="1696" height="608"></td><td>Once confirmed, the marker will show up on the map and it will also be displayed as a child note of the map.</td></tr></tbody></table></figure>

### Adding a new note using the contextual menu

1.  Right click anywhere on the map, where to place the newly created marker (and corresponding note).
2.  Select _Add a marker at this location_.
3.  Enter the name of the newly created note.
4.  The map should be updated with the new marker.

### Adding an existing note on note from the note tree

1.  Select the desired note in the <a class="reference-link" href="../../UI%20Elements/Note%20Tree.md">Note Tree</a>.
2.  Hold the mouse on the note and drag it to the map to the desired location.
3.  The map should be updated with the new marker.

This works for:

*   Notes that are not part of the geo map, case in which a [clone](../Cloning%20Notes.md) will be created.
*   Notes that are a child of the geo map but not yet positioned on the map.
*   Notes that are a child of the geo map and also positioned, case in which the marker will be relocated to the new position.

## How the location of the markers is stored

The location of a marker is stored in the `#geolocation` attribute of the child notes:

<img src="18_Geo Map View_image.png" width="1288" height="278">

This value can be added manually if needed. The value of the attribute is made up of the latitude and longitude separated by a comma.

## Repositioning markers

It's possible to reposition existing markers by simply drag and dropping them to the new destination.

As soon as the mouse is released, the new position is saved.

If moved by mistake, there is currently no way to undo the change. If the mouse was not yet released, it's possible to force a refresh of the page (<kbd>Ctrl</kbd>+<kbd>R</kbd> ) to cancel it.

## Interaction with the markers

*   Hovering over a marker will display a <a class="reference-link" href="../../UI%20Elements/Note%20Tooltip.md">Note Tooltip</a> with the content of the note it belongs to.
    *   Clicking on the note title in the tooltip will navigate to the note in the current view.
*   Middle-clicking the marker will open the note in a new tab.
*   Right-clicking the marker will open a contextual menu (as described below).
*   If the map is in read-only mode, clicking on a marker will open a <a class="reference-link" href="../../UI%20Elements/Quick%20edit.md">Quick edit</a> popup for the corresponding note.

## Contextual menu

It's possible to press the right mouse button to display a contextual menu.

1.  If right-clicking an empty section of the map (not on a marker), it allows to:
    1.  Displays the latitude and longitude. Clicking this option will copy them to the clipboard.
    2.  Open the location using an external application (if the operating system supports it).
    3.  Adding a new marker at that location.
2.  If right-clicking on a marker, it allows to:
    1.  Displays the latitude and longitude. Clicking this option will copy them to the clipboard.
    2.  Open the location using an external application (if the operating system supports it).
    3.  Open the note in a new tab, split or window.
    4.  Remove the marker from the map, which will remove the `#geolocation` attribute of the note. To add it back again, the coordinates have to be manually added back in.

## Icon and color of the markers

<figure class="image image-style-align-center"><img style="aspect-ratio:523/295;" src="Geo Map View_image.jpg" alt="image" width="523" height="295"></figure>

The markers will have the same icon as the note.

It's possible to add a custom color to a marker by assigning them a `#color` attribute such as `#color=green`.

## Adding the coordinates manually

In a nutshell, create a child note and set the `#geolocation` attribute to the coordinates.

The value of the attribute is made up of the latitude and longitude separated by a comma.

### Adding from Google Maps

<figure class="table" style="width:100%;"><table class="ck-table-resized"><colgroup><col style="width:2.77%;"><col style="width:33.24%;"><col style="width:63.99%;"></colgroup><thead><tr><th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th></tr></thead><tbody><tr><td>1</td><td><figure class="image image-style-align-center image_resized" style="width:56.84%;"><img style="aspect-ratio:732/918;" src="12_Geo Map View_image.png" width="732" height="918"></figure></td><td>Go to Google Maps on the web and look for a desired location, right click on it and a context menu will show up.&nbsp;&nbsp;&nbsp;&nbsp;<br><br>Simply click on the first item displaying the coordinates and they will be copied to clipboard.&nbsp;&nbsp;&nbsp;&nbsp;<br><br>Then paste the value inside the text box into the <code>#geolocation</code> attribute of a child note of the map (don't forget to surround the value with a <code>"</code> character).</td></tr><tr><td>2</td><td><figure class="image image-style-align-center image_resized" style="width:100%;"><img style="aspect-ratio:518/84;" src="4_Geo Map View_image.png" width="518" height="84"></figure></td><td>In Trilium, create a child note under the map.</td></tr><tr><td>3</td><td><figure class="image image-style-align-center image_resized" style="width:100%;"><img style="aspect-ratio:1074/276;" src="11_Geo Map View_image.png" width="1074" height="276"></figure></td><td>And then go to Owned Attributes and type <code>#geolocation="</code>, then paste from the clipboard as-is and then add the ending <code>"</code> character. Press Enter to confirm and the map should now be updated to contain the new note.</td></tr></tbody></table></figure>

### Adding from OpenStreetMap

Similarly to the Google Maps approach:

<figure class="table" style="width:100%;"><table class="ck-table-resized"><colgroup><col style="width:2.77%;"><col style="width:33.42%;"><col style="width:63.81%;"></colgroup><thead><tr><th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th></tr></thead><tbody><tr><td>1</td><td><img class="image_resized" style="aspect-ratio:562/454;width:100%;" src="1_Geo Map View_image.png" width="562" height="454"></td><td>Go to any location on openstreetmap.org and right click to bring up the context menu. Select the “Show address” item.</td></tr><tr><td>2</td><td><img class="image_resized" style="aspect-ratio:696/480;width:100%;" src="Geo Map View_image.png" width="696" height="480"></td><td>The address will be visible in the top-left of the screen, in the place of the search bar.&nbsp;&nbsp;&nbsp;&nbsp;<br><br>Select the coordinates and copy them into the clipboard.</td></tr><tr><td>3</td><td><img class="image_resized" style="aspect-ratio:640/276;width:100%;" src="5_Geo Map View_image.png" width="640" height="276"></td><td>Simply paste the value inside the text box into the <code>#geolocation</code> attribute of a child note of the map and then it should be displayed on the map.</td></tr></tbody></table></figure>

## Adding GPS tracks (.gpx)

Trilium has basic support for displaying GPS tracks on the geo map.

<figure class="table" style="width:100%;"><table class="ck-table-resized"><colgroup><col style="width:2.77%;"><col style="width:30.22%;"><col style="width:67.01%;"></colgroup><thead><tr><th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th></tr></thead><tbody><tr><td>1</td><td><figure class="image image-style-align-center"><img style="aspect-ratio:226/74;" src="3_Geo Map View_image.png" width="226" height="74"></figure></td><td>To add a track, simply drag &amp; drop a .gpx file inside the geo map in the note tree.</td></tr><tr><td>2</td><td><figure class="image image-style-align-center"><img style="aspect-ratio:322/222;" src="14_Geo Map View_image.png" width="322" height="222"></figure></td><td>In order for the file to be recognized as a GPS track, it needs to show up as <code>application/gpx+xml</code> in the <em>File type</em> field.</td></tr><tr><td>3</td><td><figure class="image image-style-align-center"><img style="aspect-ratio:620/530;" src="6_Geo Map View_image.png" width="620" height="530"></figure></td><td>When going back to the map, the track should now be visible.&nbsp;&nbsp;&nbsp;&nbsp;<br><br>The start and end points of the track are indicated by the two blue markers.</td></tr></tbody></table></figure>

> [!NOTE]
> The starting point of the track will be displayed as a marker, with the name of the note underneath. The start marker will also respect the icon and the `color` of the note. The end marker is displayed with a distinct icon.
> 
> If the GPX contains waypoints, they will also be displayed. If they have a name, it is displayed when hovering over it with the mouse.

## Read-only mode

When a map is in read-only all editing features will be disabled such as:

*   The add button in the <a class="reference-link" href="../../UI%20Elements/Floating%20buttons.md">Floating buttons</a>.
*   Dragging markers.
*   Editing from the contextual menu (removing locations or adding new items).

To enable read-only mode simply press the _Lock_ icon from the <a class="reference-link" href="../../UI%20Elements/Floating%20buttons.md">Floating buttons</a>. To disable it, press the button again.

## Troubleshooting

<figure class="image image-style-align-right image_resized" style="width:34.06%;"><img style="aspect-ratio:678/499;" src="13_Geo Map View_image.png" width="678" height="499"></figure>

### Grid-like artifacts on the map

This occurs if the application is not at 100% zoom which causes the pixels of the map to not render correctly due to fractional scaling. The only possible solution is to set the UI zoom at 100% (default keyboard shortcut is <kbd>Ctrl</kbd>+<kbd>0</kbd>).