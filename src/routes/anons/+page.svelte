<script lang="ts">
	import { blur } from 'svelte/transition'
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';
	import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
	import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
	
	onMount( ()=> {

		const table = [
			'', '1.webp', '', 1, 1,
			'', '2.webp', '', 2, 1,
			'', '3.webp', '', 3, 1,
			'', '4.webp', '', 4, 1,
			'', '5.webp', '', 5, 1,
			'', '6.webp', '', 6, 1,
			'', '7.webp', '', 7, 1,
			'', '8.webp', '', 8, 1,
			'', '9.webp', '', 9, 1,
			'', '10.webp', '', 10, 1,
			'', '11.webp', '', 11, 1,
			'', '12.webp', '', 12, 1,
			'', '13.webp', '', 13, 1,
			'', '14.webp', '', 14, 1,
			'', '15.webp', '', 15, 1,
			'', '16.webp', '', 16, 1,
			'', '17.webp', '', 17, 1,
			'', '18.webp', '', 18, 1,
			'', '19.webp', '', 19, 1,
			'', '20.webp', '', 20, 1,
			'', '21.webp', '', 21, 1,
			'', '22.webp', '', 22, 1,
			'', '23.webp', '', 23, 1,
			'', '24.webp', '', 24, 1,
			'', '25.webp', '', 25, 1,
			'', '26.webp', '', 26, 1,
			'', '27.webp', '', 27, 1,
			'', '28.webp', '', 28, 1,
			'', '29.webp', '', 29, 1,
			'', '30.webp', '', 1, 2,
			'', '31.webp', '', 2, 2,
			'', '32.webp', '', 3, 2,
			'', '33.webp', '', 4, 2,
			'', '34.webp', '', 5, 2,
			'', '35.webp', '', 6, 2,
			'', '36.webp', '', 7, 2,
			'', '37.webp', '', 8, 2,
			'', '38.webp', '', 9, 2,
			'', '39.webp', '', 10, 2,
			'', '40.webp', '', 11, 2,
			'', '41.webp', '', 12, 2,
			'', '42.webp', '', 13, 2,
			'', '43.webp', '', 14, 2,
			'', '44.webp', '', 15, 2,
			'', '45.webp', '', 16, 2,
			'', '46.webp', '', 17, 2,
			'', '47.webp', '', 18, 2,
			'', '48.webp', '', 19, 2,
			'', '49.webp', '', 20, 2,
			'', '50.webp', '', 21, 2,
			'', '51.webp', '', 22, 2,
			'', '52.webp', '', 23, 2,
			'', '53.webp', '', 24, 2,
			'', '54.webp', '', 25, 2,
			'', '55.webp', '', 26, 2,
			'', '56.webp', '', 27, 2,
			'', '57.webp', '', 28, 2,
			'', '58.webp', '', 29, 2,

			'', '59.webp', '', 1, 3,
			'', '60.webp', '', 2, 3,
			'', '61.webp', '', 3, 3,
			'', '62.webp', '', 4, 3,
			'', '63.webp', '', 5, 3,
			'', '64.webp', '', 6, 3,
			'', '65.webp', '', 7, 3,
			'', '66.webp', '', 8, 3,
			'', '67.webp', '', 9, 3,
			'', '68.webp', '', 10, 3,
			'', '69.webp', '', 11, 3,
			'', '70.webp', '', 12, 3,
			'', '71.webp', '', 13, 3,
			'', '72.webp', '', 14, 3,
			'', '73.webp', '', 15, 3,
			'', '74.webp', '', 16, 3,
			'', '75.webp', '', 17, 3,
			'', '76.webp', '', 18, 3,
			'', '77.webp', '', 19, 3,
			'', '78.webp', '', 20, 3,
			'', '79.webp', '', 21, 3,
			'', '80.webp', '', 22, 3,
			'', '81.webp', '', 23, 3,
			'', '82.webp', '', 24, 3,
			'', '83.webp', '', 25, 3,
			'', '84.webp', '', 26, 3,
			'', '85.webp', '', 27, 3,
			'', '86.webp', '', 28, 3,
			'', '87.webp', '', 29, 3,

			'', '88.webp', '', 1, 4,
			'', '89.webp', '', 2, 4,
			'', '90.webp', '', 3, 4,
			'', '91.webp', '', 4, 4,
			'', '92.webp', '', 5, 4,
			'', '93.webp', '', 6, 4,
			'', '94.webp', '', 7, 4,
			'', '95.webp', '', 8, 4,
			'', '96.webp', '', 9, 4,
			'', '97.webp', '', 10, 4,
			'', '98.webp', '', 11, 4,
			'', '99.webp', '', 12, 4,
			'', '100.webp', '', 13, 4,
			'', '101.webp', '', 14, 4,
			'', '102.webp', '', 15, 4,
			'', '103.webp', '', 16, 4,
			'', '104.webp', '', 17, 4,
			'', '105.webp', '', 18, 4,
			'', '106.webp', '', 19, 4,
			'', '107.webp', '', 20, 4,
			'', '108.webp', '', 21, 4,
			'', '109.webp', '', 22, 4,
			'', '110.webp', '', 23, 4,
			'', '111.webp', '', 24, 4,
			'', '112.webp', '', 25, 4,
			'', '113.webp', '', 26, 4,
			'', '114.webp', '', 27, 4,
			'', '115.webp', '', 28, 4,
			'', '116.webp', '', 29, 4,

			'', '117.webp', '', 1, 5,
			'', '118.webp', '', 2, 5,
			'', '119.webp', '', 3, 5,
			'', '120.webp', '', 4, 5,
			'', '121.webp', '', 5, 5,
			'', '122.webp', '', 6, 5,
			'', '123.webp', '', 7, 5,
			'', '124.webp', '', 8, 5,
			'', '125.webp', '', 9, 5,
			'', '126.webp', '', 10, 5,
			'', '127.webp', '', 11, 5,
			'', '128.webp', '', 12, 5,
			'', '129.webp', '', 13, 5,
			'', '130.webp', '', 14, 5,
			'', '131.webp', '', 15, 5,
			'', '132.webp', '', 16, 5,
			'', '133.webp', '', 17, 5,
			'', '134.webp', '', 18, 5,
			'', '135.webp', '', 19, 5,
			'', '136.webp', '', 20, 5,
			'', '137.webp', '', 21, 5,
			'', '138.webp', '', 22, 5,
			'', '139.webp', '', 23, 5,
			'', '140.webp', '', 24, 5,
			'', '141.webp', '', 25, 5,
			'', '142.webp', '', 26, 5,
			'', '143.webp', '', 27, 5,
			'', '144.webp', '', 28, 5,
			'', '145.webp', '', 29, 5,

			'', '146.webp', '', 1, 6,
			'', '147.webp', '', 2, 6,
			'', '148.webp', '', 3, 6,
			'', '149.webp', '', 4, 6,
			'', '150.webp', '', 5, 6,
			'', '151.webp', '', 6, 6,
			'', '152.webp', '', 7, 6,
			'', '153.webp', '', 8, 6,
			'', '154.webp', '', 9, 6,
			'', '155.webp', '', 10, 6,
			'', '156.webp', '', 11, 6,
			'', '157.webp', '', 12, 6,
			'', '158.webp', '', 13, 6,
			'', '159.webp', '', 14, 6,
			'', '160.webp', '', 15, 6,
			'', '161.webp', '', 16, 6,
			'', '162.webp', '', 17, 6,
			'', '163.webp', '', 18, 6,
			'', '164.webp', '', 19, 6,
			'', '165.webp', '', 20, 6,
			'', '166.webp', '', 21, 6,
			'', '167.webp', '', 22, 6,
			'', '168.webp', '', 23, 6,
			'', '169.webp', '', 24, 6,
			'', '170.webp', '', 25, 6,
			'', '171.webp', '', 26, 6,
			'', '172.webp', '', 27, 6,
			'', '173.webp', '', 28, 6,
			'', '174.webp', '', 29, 6,

			'', '175.webp', '', 1, 7,
			'', '176.webp', '', 2, 7,
			'', '177.webp', '', 3, 7,
			'', '178.webp', '', 4, 7,
			'', '179.webp', '', 5, 7,
			'', '180.webp', '', 6, 7,
			'', '181.webp', '', 7, 7,
			'', '182.webp', '', 8, 7,
			'', '183.webp', '', 9, 7,
			'', '184.webp', '', 10, 7,
			'', '185.webp', '', 11, 7,
			'', '186.webp', '', 12, 7,
			'', '187.webp', '', 13, 7,
			'', '188.webp', '', 14, 7,
			'', '189.webp', '', 15, 7,
			'', '190.webp', '', 16, 7,
			'', '191.webp', '', 17, 7,
			'', '192.webp', '', 18, 7,
			'', '193.webp', '', 19, 7,
			'', '194.webp', '', 20, 7,
			'', '195.webp', '', 21, 7,
			'', '196.webp', '', 22, 7,
			'', '197.webp', '', 23, 7,
			'', '198.webp', '', 24, 7,
			'', '199.webp', '', 25, 7,
			'', '200.webp', '', 26, 7,
			'', '201.webp', '', 27, 7,
			'', '202.webp', '', 28, 7,
			'', '203.webp', '', 29, 7,

			'', '204.webp', '', 1, 8,
			'', '205.webp', '', 2, 8,
			'', '206.webp', '', 3, 8,
			'', '207.webp', '', 4, 8,
			'', '208.webp', '', 5, 8,
			'', '209.webp', '', 6, 8,
			'', '210.webp', '', 7, 8,
			'', '211.webp', '', 8, 8,
			'', '212.webp', '', 9, 8,
			'', '213.webp', '', 10, 8,
			'', '214.webp', '', 11, 8,
			'', '215.webp', '', 12, 8,
			'', '216.webp', '', 13, 8,
			'', '217.webp', '', 14, 8,
			'', '218.webp', '', 15, 8,
			'', '219.webp', '', 16, 8,
			'', '220.webp', '', 17, 8,
			'', '221.webp', '', 18, 8,
			'', '222.webp', '', 19, 8,
			'', '223.webp', '', 20, 8,
			'', '224.webp', '', 21, 8,
			'', '225.webp', '', 22, 8,
			'', '226.webp', '', 23, 8,
			'', '227.webp', '', 24, 8,
			'', '228.webp', '', 25, 8,
			'', '229.webp', '', 26, 8,
			'', '230.webp', '', 27, 8,
			'', '231.webp', '', 28, 8,
			'', '232.webp', '', 29, 8,

			'', '233.webp', '', 1, 9,
			'', '234.webp', '', 2, 9,
			'', '235.webp', '', 3, 9,
			'', '236.webp', '', 4, 9,
			'', '237.webp', '', 5, 9,
			'', '238.webp', '', 6, 9,
			'', '239.webp', '', 7, 9,
			'', '240.webp', '', 8, 9,
			'', '241.webp', '', 9, 9,
			'', '242.webp', '', 10, 9,
			'', '243.webp', '', 11, 9,
			'', '244.webp', '', 12, 9,
			'', '245.webp', '', 13, 9,
			'', '246.webp', '', 14, 9,
			'', '247.webp', '', 15, 9,
			'', '248.webp', '', 16, 9,
			'', '249.webp', '', 17, 9,
			'', '250.webp', '', 18, 9,
			'', '251.webp', '', 19, 9,
			'', '252.webp', '', 20, 9,
			'', '253.webp', '', 21, 9,
			'', '254.webp', '', 22, 9,
			'', '255.webp', '', 23, 9,
			'', '256.webp', '', 24, 9,
			'', '257.webp', '', 25, 9,
			'', '258.webp', '', 26, 9,
			'', '259.webp', '', 27, 9,
			'', '260.webp', '', 28, 9,
			'', '261.webp', '', 29, 9,

			'', '262.webp', '', 1, 10,
			'', '263.webp', '', 2, 10,
			'', '264.webp', '', 3, 10,
			'', '265.webp', '', 4, 10,
			'', '266.webp', '', 5, 10,
			'', '267.webp', '', 6, 10,
			'', '268.webp', '', 7, 10,
			'', '269.webp', '', 8, 10,
			'', '270.webp', '', 9, 10,
			'', '271.webp', '', 10, 10,
			'', '272.webp', '', 11, 10,
			'', '273.webp', '', 12, 10,
			'', '274.webp', '', 13, 10,
			'', '275.webp', '', 14, 10,
			'', '276.webp', '', 15, 10,
			'', '277.webp', '', 16, 10,
			'', '278.webp', '', 17, 10,
			'', '279.webp', '', 18, 10,
			'', '280.webp', '', 19, 10,
			'', '281.webp', '', 20, 10,
			'', '282.webp', '', 21, 10,
			'', '283.webp', '', 22, 10,
			'', '284.webp', '', 23, 10,
			'', '285.webp', '', 24, 10,
			'', '286.webp', '', 25, 10,
			'', '287.webp', '', 26, 10,
			'', '288.webp', '', 27, 10,
			'', '289.webp', '', 28, 10,
			'', '290.webp', '', 29, 10,

			'', '291.webp', '', 1, 11,
			'', '292.webp', '', 2, 11,
			'', '293.webp', '', 3, 11,
			'', '294.webp', '', 4, 11,
			'', '295.webp', '', 5, 11,
			'', '296.webp', '', 6, 11,
			'', '297.webp', '', 7, 11,
			'', '298.webp', '', 8, 11,
			'', '299.webp', '', 9, 11,
			'', '300.webp', '', 10, 11,
			'', '301.webp', '', 11, 11,
			'', '302.webp', '', 12, 11,
			'', '303.webp', '', 13, 11,
			'', '304.webp', '', 14, 11,
			'', '305.webp', '', 15, 11,
			'', '306.webp', '', 16, 11,
			'', '307.webp', '', 17, 11,
			'', '308.webp', '', 18, 11,
			'', '309.webp', '', 19, 11,
			'', '310.webp', '', 20, 11,
			'', '311.webp', '', 21, 11,
			'', '312.webp', '', 22, 11,
			'', '313.webp', '', 23, 11,
			'', '314.webp', '', 24, 11,
			'', '315.webp', '', 25, 11,
			'', '316.webp', '', 26, 11,
			'', '317.webp', '', 27, 11,
			'', '318.webp', '', 28, 11,
			'', '319.webp', '', 29, 11,

			'', '320.webp', '', 1, 12,
			'', '321.webp', '', 2, 12,
			'', '322.webp', '', 3, 12,
			'', '323.webp', '', 4, 12,
			'', '324.webp', '', 5, 12,
			'', '325.webp', '', 6, 12,
			'', '326.webp', '', 7, 12,
			'', '327.webp', '', 8, 12,
			'', '328.webp', '', 9, 12,
			'', '329.webp', '', 10, 12,
			'', '330.webp', '', 11, 12,
			'', '331.webp', '', 12, 12,
			'', '332.webp', '', 13, 12,
			'', '333.webp', '', 14, 12,
			'', '334.webp', '', 15, 12,
			'', '335.webp', '', 16, 12,
			'', '336.webp', '', 17, 12,
			'', '337.webp', '', 18, 12,
			'', '338.webp', '', 19, 12,
			'', '339.webp', '', 20, 12,
			'', '340.webp', '', 21, 12,
			'', '341.webp', '', 22, 12,
			'', '342.webp', '', 23, 12,
			'', '343.webp', '', 24, 12,
			'', '344.webp', '', 25, 12,
			'', '345.webp', '', 26, 12,
			'', '346.webp', '', 27, 12,
			'', '347.webp', '', 28, 12,
			'', '348.webp', '', 29, 12,

			'', '349.webp', '', 1, 13,
			'', '350.webp', '', 2, 13,
			'', '351.webp', '', 3, 13,
			'', '352.webp', '', 4, 13,
			'', '353.webp', '', 5, 13,
			'', '354.webp', '', 6, 13,
			'', '355.webp', '', 7, 13,
			'', '356.webp', '', 8, 13,
			'', '357.webp', '', 9, 13,
			'', '358.webp', '', 10, 13,
			'', '359.webp', '', 11, 13,
			'', '360.webp', '', 12, 13,
			'', '361.webp', '', 13, 13,
			'', '362.webp', '', 14, 13,
			'', '363.webp', '', 15, 13,
			'', '364.webp', '', 16, 13,
			'', '365.webp', '', 17, 13,
			'', '366.webp', '', 18, 13,
			'', '367.webp', '', 19, 13,
			'', '368.webp', '', 20, 13,
			'', '369.webp', '', 21, 13,
			'', '370.webp', '', 22, 13,
			'', '371.webp', '', 23, 13,
			'', '372.webp', '', 24, 13,
			'', '373.webp', '', 25, 13,
			'', '374.webp', '', 26, 13,
			'', '375.webp', '', 27, 13,
			'', '376.webp', '', 28, 13,
			'', '377.webp', '', 29, 13,

			'', '378.webp', '', 1, 14,
			'', '379.webp', '', 2, 14,
			'', '380.webp', '', 3, 14,
			'', '381.webp', '', 4, 14,
			'', '382.webp', '', 5, 14,
			'', '383.webp', '', 6, 14,
			'', '384.webp', '', 7, 14,
			'', '385.webp', '', 8, 14,
			'', '386.webp', '', 9, 14,
			'', '387.webp', '', 10, 14,
			'', '388.webp', '', 11, 14,
			'', '389.webp', '', 12, 14,
			'', '390.webp', '', 13, 14,
			'', '391.webp', '', 14, 14,
			'', '392.webp', '', 15, 14,
			'', '393.webp', '', 16, 14,
			'', '394.webp', '', 17, 14,
			'', '395.webp', '', 18, 14,
			'', '396.webp', '', 19, 14,
			'', '397.webp', '', 20, 14,
			'', '398.webp', '', 21, 14,
			'', '399.webp', '', 22, 14,
			'', '400.webp', '', 23, 14,
			'', '401.webp', '', 24, 14,
			'', '402.webp', '', 25, 14,
			'', '403.webp', '', 26, 14,
			'', '404.webp', '', 27, 14,
			'', '405.webp', '', 28, 14,
			'', '406.webp', '', 29, 14,

			'', '407.webp', '', 1, 15,
			'', '408.webp', '', 2, 15,
			'', '409.webp', '', 3, 15,
			'', '410.webp', '', 4, 15,
			'', '411.webp', '', 5, 15,
			'', '412.webp', '', 6, 15,
			'', '413.webp', '', 7, 15,
			'', '414.webp', '', 8, 15,
			'', '415.webp', '', 9, 15,
			'', '416.webp', '', 10, 15,
			'', '417.webp', '', 11, 15,
			'', '418.webp', '', 12, 15,
			'', '419.webp', '', 13, 15,
			'', '420.webp', '', 14, 15,
			'', '421.webp', '', 15, 15,
			'', '422.webp', '', 16, 15,
			'', '423.webp', '', 17, 15,
			'', '424.webp', '', 18, 15,
			'', '425.webp', '', 19, 15,
			'', '426.webp', '', 20, 15,
			'', '427.webp', '', 21, 15,
			'', '428.webp', '', 22, 15,
			'', '429.webp', '', 23, 15,
			'', '430.webp', '', 24, 15,
			'', '431.webp', '', 25, 15,
			'', '432.webp', '', 26, 15,
			'', '433.webp', '', 27, 15,
			'', '434.webp', '', 28, 15,
			'', '435.webp', '', 29, 15,

			'', '436.webp', '', 1, 16,
			'', '437.webp', '', 2, 16,
			'', '438.webp', '', 3, 16,
			'', '439.webp', '', 4, 16,
			'', '440.webp', '', 5, 16,
			'', '441.webp', '', 6, 16,
			'', '442.webp', '', 7, 16,
			'', '443.webp', '', 8, 16,
			'', '444.webp', '', 9, 16,
			'', '445.webp', '', 10, 16,
			'', '446.webp', '', 11, 16,
			'', '447.webp', '', 12, 16,
			'', '448.webp', '', 13, 16,
			'', '449.webp', '', 14, 16,
			'', '450.webp', '', 15, 16,
			'', '451.webp', '', 16, 16,
			'', '452.webp', '', 17, 16,
			'', '453.webp', '', 18, 16,
			'', '454.webp', '', 19, 16,
			'', '455.webp', '', 20, 16,
			'', '456.webp', '', 21, 16,
			'', '457.webp', '', 22, 16,
			'', '458.webp', '', 23, 16,
			'', '459.webp', '', 24, 16,
			'', '460.webp', '', 25, 16,
			'', '461.webp', '', 26, 16,
			'', '462.webp', '', 27, 16,
			'', '463.webp', '', 28, 16,
			'', '464.webp', '', 29, 16,

			'', '465.webp', '', 1, 17,
			'', '466.webp', '', 2, 17,
			'', '467.webp', '', 3, 17,
			'', '468.webp', '', 4, 17,
			'', '469.webp', '', 5, 17,
			'', '470.webp', '', 6, 17,
			'', '471.webp', '', 7, 17,
			'', '472.webp', '', 8, 17,
			'', '473.webp', '', 9, 17,
			'', '474.webp', '', 10, 17,
			'', '475.webp', '', 11, 17,
			'', '476.webp', '', 12, 17,
			'', '477.webp', '', 13, 17,
			'', '478.webp', '', 14, 17,
			'', '479.webp', '', 15, 17,
			'', '480.webp', '', 16, 17,
			'', '481.webp', '', 17, 17,
			'', '482.webp', '', 18, 17,
			'', '483.webp', '', 19, 17,
			'', '484.webp', '', 20, 17,
			'', '485.webp', '', 21, 17,
			'', '486.webp', '', 22, 17,
			'', '487.webp', '', 23, 17,
			'', '488.webp', '', 24, 17,
			'', '489.webp', '', 25, 17,
			'', '490.webp', '', 26, 17,
			'', '491.webp', '', 27, 17,
			'', '492.webp', '', 28, 17,
			'', '493.webp', '', 29, 17,

			'', '494.webp', '', 1, 18,
			'', '495.webp', '', 2, 18,
			'', '496.webp', '', 3, 18,
			'', '497.webp', '', 4, 18,
			'', '498.webp', '', 5, 18,
			'', '499.webp', '', 6, 18,
			'', '500.webp', '', 7, 18,
			'', '501.webp', '', 8, 18,
			'', '502.webp', '', 9, 18,
			'', '503.webp', '', 10, 18,
			'', '504.webp', '', 11, 18,
			'', '505.webp', '', 12, 18,
			'', '506.webp', '', 13, 18,
			'', '507.webp', '', 14, 18,
			'', '508.webp', '', 15, 18,
			'', '509.webp', '', 16, 18,
			'', '510.webp', '', 17, 18,
			'', '511.webp', '', 18, 18,
			'', '512.webp', '', 19, 18,
			'', '513.webp', '', 20, 18,
			'', '514.webp', '', 21, 18,
			'', '515.webp', '', 22, 18,
			'', '516.webp', '', 23, 18,
			'', '517.webp', '', 24, 18,
			'', '518.webp', '', 25, 18,
			'', '519.webp', '', 26, 18,
			'', '520.webp', '', 27, 18,
			'', '521.webp', '', 28, 18,
			'', '522.webp', '', 29, 18,

			'', '523.webp', '', 1, 19,
			'', '524.webp', '', 2, 19,
			'', '525.webp', '', 3, 19,
			'', '526.webp', '', 4, 19,
			'', '527.webp', '', 5, 19,
			'', '528.webp', '', 6, 19,
			'', '529.webp', '', 7, 19,
			'', '530.webp', '', 8, 19,
			'', '531.webp', '', 9, 19,
			'', '532.webp', '', 10, 19,
			'', '533.webp', '', 11, 19,
			'', '534.webp', '', 12, 19,
			'', '535.webp', '', 13, 19,
			'', '536.webp', '', 14, 19,
			'', '537.webp', '', 15, 19,
			'', '538.webp', '', 16, 19,
			'', '539.webp', '', 17, 19,
			'', '540.webp', '', 18, 19,
			'', '541.webp', '', 19, 19,
			'', '542.webp', '', 20, 19,
			'', '543.webp', '', 21, 19,
			'', '544.webp', '', 22, 19,
			'', '545.webp', '', 23, 19,
			'', '546.webp', '', 24, 19,
			'', '547.webp', '', 25, 19,
			'', '548.webp', '', 26, 19,
			'', '549.webp', '', 27, 19,
			'', '550.webp', '', 28, 19,
			'', '551.webp', '', 29, 19,

			'', '552.webp', '', 1, 20,
			'', '553.webp', '', 2, 20,
			'', '554.webp', '', 3, 20,
			'', '555.webp', '', 4, 20,
			'', '556.webp', '', 5, 20,
			'', '557.webp', '', 6, 20,
			'', '558.webp', '', 7, 20,
			'', '559.webp', '', 8, 20,
			'', '560.webp', '', 9, 20,
			'', '561.webp', '', 10, 20,
			'', '562.webp', '', 11, 20,
			'', '563.webp', '', 12, 20,
			'', '564.webp', '', 13, 20,
			'', '565.webp', '', 14, 20,
			'', '566.webp', '', 15, 20,
			'', '567.webp', '', 16, 20,
			'', '568.webp', '', 17, 20,
			'', '569.webp', '', 18, 20,
			'', '570.webp', '', 19, 20,
			'', '571.webp', '', 20, 20,
			'', '572.webp', '', 21, 20,
			'', '573.webp', '', 22, 20,
			'', '574.webp', '', 23, 20,
			'', '575.webp', '', 24, 20,
			'', '576.webp', '', 25, 20,
			'', '577.webp', '', 26, 20,
			'', '578.webp', '', 27, 20,
			'', '579.webp', '', 28, 20,
			'', '580.webp', '', 29, 20,
		]

		let camera, scene, renderer;
		let controls;

		const objects = [];
		const targets = { table: [], sphere: [], helix: [], grid: [] };

		init();
		animate();

		function init() {
			
			let container = document.getElementById('threeScene')

			camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
			camera.position.z = 4000;

			scene = new THREE.Scene();

			// table

			for ( let i = 0; i < table.length; i += 5 ) {

	
				const element = document.createElement( 'div' );
				element.className = 'element';
				// element.style.backgroundColor = 'rgba(242, 176, 70,' + ( Math.random() * 0.5 + 0.25 ) + ')';
				// element.style.backgroundImage = 'url(' + '/images/scrt.svg)'
				element.style.backgroundImage = 'url(anons/' + table[ i + 1 ] + ')'

				const number = document.createElement( 'div' );
				number.className = 'number';
				number.textContent = ( i / 5 ) + 1;
				element.appendChild( number );

				const symbol = document.createElement( 'div' );
				symbol.className = 'symbol';
				symbol.textContent = table[ i ];
				element.appendChild( symbol );

				const details = document.createElement( 'div' );
				details.className = 'details';
				details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
				element.appendChild( details );

				const objectCSS = new CSS3DObject( element );
				objectCSS.position.x = Math.random() * 4000 - 2000;
				objectCSS.position.y = Math.random() * 4000 - 2000;
				objectCSS.position.z = Math.random() * 4000 - 2000;
				scene.add( objectCSS );

				objects.push( objectCSS );

				//

				const object = new THREE.Object3D();
				object.position.x = ( table[ i + 3 ] * 180 ) - 2700;
				object.position.y = - ( table[ i + 4 ] * 180 ) + 1980;

				targets.table.push( object );

			}

			// sphere

			const vector = new THREE.Vector3();

			for ( let i = 0, l = objects.length; i < l; i ++ ) {

				const phi = Math.acos( - 1 + ( 2 * i ) / l );
				const theta = Math.sqrt( l * Math.PI ) * phi;

				const object = new THREE.Object3D();

				object.position.setFromSphericalCoords( 1600, phi, theta );

				vector.copy( object.position ).multiplyScalar( 2 );

				object.lookAt( vector );

				targets.sphere.push( object );

			}

			// helix

			for ( let i = 0, l = objects.length; i < l; i ++ ) {

				const theta = i * 0.175 + Math.PI;
				const y = - ( i * 8 ) + 2000;

				const object = new THREE.Object3D();

				object.position.setFromCylindricalCoords( 1000, theta, y );

				vector.x = object.position.x * 2;
				vector.y = object.position.y;
				vector.z = object.position.z * 2;

				object.lookAt( vector );

				targets.helix.push( object );

			}

			// grid

			for ( let i = 0; i < objects.length; i ++ ) {

				const object = new THREE.Object3D();

				object.position.x = ( ( i % 5 ) * 400 ) - 800;
				object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
				object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 12500;

				targets.grid.push( object );

			}

			//

			renderer = new CSS3DRenderer();
			renderer.setSize( container?.clientWidth, container?.clientHeight );
			document.getElementById( 'container' ).appendChild( renderer.domElement );

			//

			controls = new TrackballControls( camera, renderer.domElement );
			controls.minDistance = 500;
			controls.maxDistance = 14000;
			controls.addEventListener( 'change', render );

			const buttonTable = document.getElementById( 'table' );
			buttonTable.addEventListener( 'click', function () {

				transform( targets.table, 2000 );

			} );

			const buttonSphere = document.getElementById( 'sphere' );
			buttonSphere.addEventListener( 'click', function () {

				transform( targets.sphere, 2000 );

			} );

			const buttonHelix = document.getElementById( 'helix' );
			buttonHelix.addEventListener( 'click', function () {

				transform( targets.helix, 2000 );

			} );

			const buttonGrid = document.getElementById( 'grid' );
			buttonGrid.addEventListener( 'click', function () {

				transform( targets.grid, 2000 );

			} );

			transform( targets.table, 2000 );

			//

			window.addEventListener( 'resize', onWindowResize );

		}

		function transform( targets, duration ) {

			TWEEN.removeAll();

			for ( let i = 0; i < objects.length; i ++ ) {

				const object = objects[ i ];
				const target = targets[ i ];

				new TWEEN.Tween( object.position )
					.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
					.easing( TWEEN.Easing.Exponential.InOut )
					.start();

				new TWEEN.Tween( object.rotation )
					.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
					.easing( TWEEN.Easing.Exponential.InOut )
					.start();

			}

			new TWEEN.Tween( this )
				.to( {}, duration * 2 )
				.onUpdate( render )
				.start();

		}

		function onWindowResize() {

			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize( window.innerWidth, window.innerHeight );

			render();

		}

		function animate() {

			requestAnimationFrame( animate );

			TWEEN.update();

			controls.update();

		}

		function render() {

			renderer.render( scene, camera );

		}
	})
	

	/// skybox start
	// // @ts-expect-error
	// let scene, camera, renderer, container

	// function init() {
	// 	scene = new THREE.Scene();
	// 	container = document.getElementById("threeScene");

	// 	camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,45,30000);
	// 	camera.position.set(-900,-200,-900);

	// 	renderer = new THREE.WebGLRenderer({antialias:true});
	// 	renderer.setSize(window.innerWidth*0.708,window.innerHeight*0.65);

	// 	container!.appendChild(renderer.domElement);

	// 	let controls = new OrbitControls(camera, renderer.domElement);
	// 	// @ts-expect-error
	// 	controls.addEventListener('change', renderer);
	// 	controls.minDistance = 500;
	// 	controls.maxDistance = 1500;

	// 	let materialArray = [];
	// 	let texture_ft = new THREE.TextureLoader().load( 'kenon_star_ft.jpg');
	// 	let texture_bk = new THREE.TextureLoader().load( 'kenon_star_bk.jpg');
	// 	let texture_up = new THREE.TextureLoader().load( 'kenon_star_up.jpg');
	// 	let texture_dn = new THREE.TextureLoader().load( 'kenon_star_dn.jpg');
	// 	let texture_rt = new THREE.TextureLoader().load( 'kenon_star_rt.jpg');
	// 	let texture_lf = new THREE.TextureLoader().load( 'kenon_star_lf.jpg');
		
	// 	materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
	// 	materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
	// 	materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
	// 	materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
	// 	materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
	// 	materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
	
	// 	for (let i = 0; i < 6; i++)
	// 	materialArray[i].side = THREE.BackSide;
		
	// 	let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
	// 	let skybox = new THREE.Mesh( skyboxGeo, materialArray );
	// 	scene.add( skybox );

	// 	animate()
	// }

	// function animate() {
	// 	// @ts-expect-error
    //     renderer.render(scene,camera);
    //     requestAnimationFrame(animate);
	// }
    
	// onMount( () => init() )
	/// skybox end

</script>

<div id="threeScene" in:blur>

	<style>
		#menu {
			position: absolute;
			bottom: 20px;
			width: 100%;
			text-align: center;
		}

		.element {
			width: 160px;
			height: 160px;
			box-shadow: 0px 0px 12px rgba(121, 132, 152, 0.5);
			border: 1px solid rgba(121, 132, 152, 0.25);
			font-family: Helvetica, sans-serif;
			text-align: center;
			line-height: normal;
			cursor: default;
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
		}

		.element:hover {
			box-shadow: 0px 0px 12px rgba(242, 176, 70, 0.75);
			border: 1px solid rgba(242, 176, 70, 0.75);
			filter: brightness(105%);
		}

			.element .number {
				position: absolute;
				top: 20px;
				right: 20px;
				font-size: 12px;
				color: rgba(242, 176, 70,0.75);
				visibility: hidden;
			}

			.element .symbol {
				position: absolute;
				top: 40px;
				left: 0px;
				right: 0px;
				font-size: 60px;
				font-weight: bold;
				color: rgba(255,255,255,0.75);
				text-shadow: 0 0 10px rgba(242, 176, 70,0.95);
				visibility: hidden;
			}

			.element .details {
				position: absolute;
				bottom: 15px;
				left: 0px;
				right: 0px;
				font-size: 12px;
				color: rgba(242, 176, 70,0.75);
				visibility: hidden;
			}

		#menu {
			position: absolute;
			bottom: 20px;
			width: 100%;
			text-align: center;
		}

		button {
			color: rgba(242, 176, 70, 0.75);
			background: transparent;
			outline: 1px solid rgba(242, 176, 70, 0.75);
			border: 0px;
			padding: 5px 10px;
			cursor: pointer;
		}

		button:hover {
			background-color: rgba(242, 176, 70, 0.5);
		}

		button:active {
			color: #000000;
			background-color: rgba(242, 176, 70, 0.75);
		}
	</style>

	<div id="container"></div>
	<div id="menu">
		<button id="table">TABLE</button>
		<button id="sphere">SPHERE</button>
		<button id="helix">HELIX</button>
		<button id="grid">GRID</button>
	</div>

</div>

<style>

	#threeScene {
		/* border: solid 2px var(--color-theme-2); */
		position: absolute;
		top: 50px;
		left: 5vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 90vw;
		height: 85vh;
		margin: 0 auto;
		/* margin: 0;
		overflow: hidden; */
	}

	

</style>