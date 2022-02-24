import { writable } from "svelte/store";

export const FeedbackStore = writable([
		{
			id:1,
			rating:10,
			text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio elit, egestas in velit non, fringilla dictum enim. Ut viverra mauris eget sem viverra auctor. Mauris a condimentum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris eget lacinia risus. Aliquam efficitur vulputate diam.'
		},
		{
			id:2,
			rating:2,
			text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio elit, egestas in velit non, fringilla dictum enim. Ut viverra mauris eget sem viverra auctor. Mauris a condimentum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris eget lacinia risus. Aliquam efficitur vulputate diam.'
		},
		{
			id:3,
			rating:5,
			text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio elit, egestas in velit non, fringilla dictum enim. Ut viverra mauris eget sem viverra auctor. Mauris a condimentum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris eget lacinia risus. Aliquam efficitur vulputate diam.'
		}
	]
)