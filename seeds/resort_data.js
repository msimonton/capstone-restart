
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resort_data').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        // knex('resort_data').insert({resort_name:
        // knex('resort_data').insert({resort_name:
        // knex('resort_data').insert({resort_name:
        // knex('resort_data').insert({resort_name:
        // knex('resort_data').insert({resort_name:
        // knex('resort_data').insert({resort_name:
        // knex('resort_data').insert({resort_name:
        // knex('resort_data').insert({resort_name:
        // knex('resort_data').insert({resort_name:
        // knex('resort_data').insert({resort_name:
        // knex('resort_data').insert({resort_name:
        // knex('resort_data').insert({resort_name:
        // knex('resort_data').insert({resort_name:
        // knex('resort_data').insert({resort_name:
        // knex('resort_data').insert({resort_name:
        // knex('resort_data').insert({resort_name:
        // knex('resort_data').insert({resort_name:
        // knex('resort_data').insert({resort_name:

      	knex('resort_data').insert({resort_name:'Telluride',       beginner:45, intermediate: 45, advanced: 40, off_piste:	40, tree_skiing: 40, expert: 50, extreme: 45, snow: 40, freshies:	35, uncrowded: 35, slackcountry: 35, lifts: 50, terrain_park: 30, family_friendly:	45, daytime_restaurants: 50, nighttime_restaurants: 45, nightlife: 30, skin_skiout: 50, cost:	20, apres: 30, powderhounds: 45, overall: 50}),
      	knex('resort_data').insert({resort_name:'Beaver Creek',    beginner:45, intermediate: 40, advanced: 40, off_piste:	35, tree_skiing: 30, expert: 30, extreme: 25, snow: 35, freshies:	25, uncrowded: 25, slackcountry: 00, lifts: 45, terrain_park: 30, family_friendly:	45, daytime_restaurants: 35, nighttime_restaurants: 40, nightlife: 25, skin_skiout: 50, cost:	15, apres: 30, powderhounds: 35, overall: 40}),
      	knex('resort_data').insert({resort_name:'Snowmass',        beginner:30, intermediate: 50, advanced: 30, off_piste:	45, tree_skiing: 40, expert: 45, extreme: 45, snow: 40, freshies:	30, uncrowded: 35, slackcountry: 00, lifts: 45, terrain_park: 40, family_friendly:	50, daytime_restaurants: 35, nighttime_restaurants: 30, nightlife: 25, skin_skiout: 50, cost:	25, apres: 25, powderhounds: 40, overall: 45}),
      	knex('resort_data').insert({resort_name:'Vail',            beginner:30, intermediate: 35, advanced: 50, off_piste:	50, tree_skiing: 35, expert: 25, extreme: 00, snow: 40, freshies:	25, uncrowded: 20, slackcountry: 30, lifts: 45, terrain_park: 40, family_friendly:	30, daytime_restaurants: 50, nighttime_restaurants: 50, nightlife: 50, skin_skiout: 25, cost:	20, apres: 50, powderhounds: 35, overall: 45}),
      	knex('resort_data').insert({resort_name:'Breckenridge',    beginner:50, intermediate: 40, advanced: 45, off_piste:	45, tree_skiing: 25, expert: 40, extreme: 40, snow: 35, freshies:	20, uncrowded: 10, slackcountry: 00, lifts: 40, terrain_park: 50, family_friendly:	45, daytime_restaurants: 30, nighttime_restaurants: 40, nightlife: 50, skin_skiout: 40, cost:	30, apres: 40, powderhounds: 30, overall: 45}),
	      knex('resort_data').insert({resort_name:'Buttermilk',      beginner:45, intermediate: 30, advanced: 20, off_piste:	20, tree_skiing: 20, expert: 15, extreme: 00, snow: 25, freshies:	45, uncrowded: 40, slackcountry: 00, lifts: 40, terrain_park: 50, family_friendly:	40, daytime_restaurants: 25, nighttime_restaurants: 10, nightlife: 10, skin_skiout: 15, cost:	25, apres: 10, powderhounds: 30, overall: 35}),
        knex('resort_data').insert({resort_name:'Copper Mountain', beginner:50, intermediate: 50, advanced: 35, off_piste:	40, tree_skiing: 30, expert: 30, extreme: 30, snow: 35, freshies:	25, uncrowded: 35, slackcountry: 40, lifts: 40, terrain_park: 40, family_friendly:	50, daytime_restaurants: 40, nighttime_restaurants: 40, nightlife: 35, skin_skiout: 35, cost:	30, apres: 40, powderhounds: 35, overall: 45}),
      	knex('resort_data').insert({resort_name:'Keystone',        beginner:25, intermediate: 50, advanced: 40, off_piste:	40, tree_skiing: 40, expert: 30, extreme: 00, snow: 30, freshies:	20, uncrowded: 20, slackcountry: 50, lifts: 40, terrain_park: 50, family_friendly:	30, daytime_restaurants: 20, nighttime_restaurants: 40, nightlife: 40, skin_skiout: 10, cost:	30, apres: 30, powderhounds: 30, overall: 40}),
      	knex('resort_data').insert({resort_name:'Aspen Highlands', beginner:30, intermediate: 35, advanced: 40, off_piste:	40, tree_skiing: 30, expert: 45, extreme: 30, snow: 35, freshies:	30, uncrowded: 40, slackcountry: 00, lifts: 35, terrain_park: 00, family_friendly:	30, daytime_restaurants: 25, nighttime_restaurants: 20, nightlife: 20, skin_skiout: 30, cost:	25, apres: 25, powderhounds: 40, overall: 40}),
      	knex('resort_data').insert({resort_name:'Aspen Mountain',  beginner:00, intermediate: 35, advanced: 35, off_piste:	30, tree_skiing: 25, expert: 30, extreme: 20, snow: 35, freshies:	25, uncrowded: 35, slackcountry: 00, lifts: 35, terrain_park: 00, family_friendly:	25, daytime_restaurants: 25, nighttime_restaurants: 50, nightlife: 45, skin_skiout: 20, cost:	20, apres: 40, powderhounds: 35, overall: 35}),
        knex('resort_data').insert({resort_name:'Crested Butte',   beginner:35, intermediate: 35, advanced: 25, off_piste:	40, tree_skiing: 40, expert: 50, extreme: 50, snow: 35, freshies:	40, uncrowded: 40, slackcountry: 00, lifts: 35, terrain_park: 35, family_friendly:	45, daytime_restaurants: 30, nighttime_restaurants: 40, nightlife: 30, skin_skiout: 30, cost:	40, apres: 30, powderhounds: 40, overall: 45}),
      	knex('resort_data').insert({resort_name:'Steamboat',       beginner:35, intermediate: 45, advanced: 40, off_piste:	40, tree_skiing: 50, expert: 30, extreme: 20, snow: 40, freshies:	30, uncrowded: 40, slackcountry: 00, lifts: 35, terrain_park: 35, family_friendly:	45, daytime_restaurants: 30, nighttime_restaurants: 35, nightlife: 30, skin_skiout: 35, cost:	30, apres: 30, powderhounds: 40, overall: 45}),
      	knex('resort_data').insert({resort_name:'Purgatory',       beginner:45, intermediate: 50, advanced: 25, off_piste:	20, tree_skiing: 20, expert: 10, extreme: 10, snow: 30, freshies:	25, uncrowded: 30, slackcountry: 10, lifts: 30, terrain_park: 30, family_friendly:	50, daytime_restaurants: 40, nighttime_restaurants: 20, nightlife: 25, skin_skiout: 40, cost:	40, apres: 25, powderhounds: 30, overall: 40}),
      	knex('resort_data').insert({resort_name:'Wolf Creed',      beginner:35, intermediate: 30, advanced: 30, off_piste:	50, tree_skiing: 50, expert: 40, extreme: 40, snow: 50, freshies:	50, uncrowded: 50, slackcountry: 20, lifts: 30, terrain_park: 00, family_friendly:	40, daytime_restaurants: 15, nighttime_restaurants: 30, nightlife: 20, skin_skiout: 00, cost:	50, apres: 15, powderhounds: 50, overall: 40}),
      	knex('resort_data').insert({resort_name:'Arapahoe Basin',  beginner:20, intermediate: 25, advanced: 30, off_piste:	35, tree_skiing: 20, expert: 30, extreme: 20, snow: 30, freshies:	30, uncrowded: 45, slackcountry: 30, lifts: 25, terrain_park: 30, family_friendly:	10, daytime_restaurants: 25, nighttime_restaurants: 00, nightlife: 00, skin_skiout: 00, cost:	30, apres: 00, powderhounds: 35, overall: 30}),
      	knex('resort_data').insert({resort_name:'Monarch',         beginner:25, intermediate: 25, advanced: 20, off_piste:	30, tree_skiing: 30, expert: 30, extreme: 30, snow: 35, freshies:	30, uncrowded: 40, slackcountry: 30, lifts: 25, terrain_park: 25, family_friendly:	40, daytime_restaurants: 20, nighttime_restaurants: 20, nightlife: 10, skin_skiout: 00, cost:	45, apres: 20, powderhounds: 40, overall: 35}),
      	knex('resort_data').insert({resort_name:'Powderhorn',      beginner:25, intermediate: 30, advanced: 30, off_piste:	30, tree_skiing: 35, expert: 10, extreme: 10, snow: 30, freshies:	40, uncrowded: 50, slackcountry: 25, lifts: 25, terrain_park: 25, family_friendly:	40, daytime_restaurants: 25, nighttime_restaurants: 15, nightlife: 15, skin_skiout: 15, cost:	50, apres: 30, powderhounds: 40, overall: 38}),
      	knex('resort_data').insert({resort_name:'Silverton',       beginner:00, intermediate: 00, advanced: 30, off_piste:	50, tree_skiing: 40, expert: 50, extreme: 50, snow: 45, freshies:	40, uncrowded: 50, slackcountry: 00, lifts: 10, terrain_park: 00, family_friendly:	00, daytime_restaurants: 05, nighttime_restaurants: 15, nightlife: 10, skin_skiout: 00, cost:	40, apres: 40, powderhounds: 50, overall: 35})
      ]);
    });
};
