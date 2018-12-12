select 
  profile_id as "profileId", 
  count(goal_table.id) as count,
  end_date - start_date as diff
from goal_table