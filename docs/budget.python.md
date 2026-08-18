# `budget` Submodule <a name="`budget` Submodule" id="@cdktn/provider-databricks.budget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Budget <a name="Budget" id="@cdktn/provider-databricks.budget.Budget"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget databricks_budget}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.budget.Budget.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.Budget(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str = None,
  alert_configurations: IResolvable | typing.List[BudgetAlertConfigurations] = None,
  budget_configuration_id: str = None,
  create_time: typing.Union[int, float] = None,
  display_name: str = None,
  filter: BudgetFilter = None,
  id: str = None,
  resource_type: str = None,
  update_time: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#account_id Budget#account_id}. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.Initializer.parameter.alertConfigurations">alert_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>]</code> | alert_configurations block. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.Initializer.parameter.budgetConfigurationId">budget_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#budget_configuration_id Budget#budget_configuration_id}. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.Initializer.parameter.createTime">create_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#create_time Budget#create_time}. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#display_name Budget#display_name}. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-databricks.budget.BudgetFilter">BudgetFilter</a></code> | filter block. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#id Budget#id}. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#resource_type Budget#resource_type}. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.Initializer.parameter.updateTime">update_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#update_time Budget#update_time}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.budget.Budget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.budget.Budget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.budget.Budget.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.budget.Budget.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.budget.Budget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.budget.Budget.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.budget.Budget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.budget.Budget.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.budget.Budget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-databricks.budget.Budget.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#account_id Budget#account_id}.

---

##### `alert_configurations`<sup>Optional</sup> <a name="alert_configurations" id="@cdktn/provider-databricks.budget.Budget.Initializer.parameter.alertConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>]

alert_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#alert_configurations Budget#alert_configurations}

---

##### `budget_configuration_id`<sup>Optional</sup> <a name="budget_configuration_id" id="@cdktn/provider-databricks.budget.Budget.Initializer.parameter.budgetConfigurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#budget_configuration_id Budget#budget_configuration_id}.

---

##### `create_time`<sup>Optional</sup> <a name="create_time" id="@cdktn/provider-databricks.budget.Budget.Initializer.parameter.createTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#create_time Budget#create_time}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.budget.Budget.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#display_name Budget#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.budget.Budget.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-databricks.budget.BudgetFilter">BudgetFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#filter Budget#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.budget.Budget.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#id Budget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-databricks.budget.Budget.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#resource_type Budget#resource_type}.

---

##### `update_time`<sup>Optional</sup> <a name="update_time" id="@cdktn/provider-databricks.budget.Budget.Initializer.parameter.updateTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#update_time Budget#update_time}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.putAlertConfigurations">put_alert_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.resetAlertConfigurations">reset_alert_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.resetBudgetConfigurationId">reset_budget_configuration_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.resetCreateTime">reset_create_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.resetUpdateTime">reset_update_time</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.budget.Budget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.budget.Budget.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.budget.Budget.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.budget.Budget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.budget.Budget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.budget.Budget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.budget.Budget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.budget.Budget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.budget.Budget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.budget.Budget.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.budget.Budget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.budget.Budget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.budget.Budget.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.budget.Budget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.budget.Budget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.Budget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.budget.Budget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.Budget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.budget.Budget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.Budget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.budget.Budget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.Budget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.budget.Budget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.Budget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.budget.Budget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.Budget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.budget.Budget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.Budget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.budget.Budget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.Budget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.budget.Budget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.Budget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.budget.Budget.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.budget.Budget.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.budget.Budget.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.budget.Budget.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.budget.Budget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.Budget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.budget.Budget.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.budget.Budget.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.budget.Budget.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.budget.Budget.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.budget.Budget.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.budget.Budget.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.budget.Budget.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_alert_configurations` <a name="put_alert_configurations" id="@cdktn/provider-databricks.budget.Budget.putAlertConfigurations"></a>

```python
def put_alert_configurations(
  value: IResolvable | typing.List[BudgetAlertConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.budget.Budget.putAlertConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>]

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-databricks.budget.Budget.putFilter"></a>

```python
def put_filter(
  tags: IResolvable | typing.List[BudgetFilterTags] = None,
  workspace_id: BudgetFilterWorkspaceId = None
) -> None
```

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-databricks.budget.Budget.putFilter.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#tags Budget#tags}

---

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.budget.Budget.putFilter.parameter.workspaceId"></a>

- *Type:* <a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a>

workspace_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#workspace_id Budget#workspace_id}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-databricks.budget.Budget.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_alert_configurations` <a name="reset_alert_configurations" id="@cdktn/provider-databricks.budget.Budget.resetAlertConfigurations"></a>

```python
def reset_alert_configurations() -> None
```

##### `reset_budget_configuration_id` <a name="reset_budget_configuration_id" id="@cdktn/provider-databricks.budget.Budget.resetBudgetConfigurationId"></a>

```python
def reset_budget_configuration_id() -> None
```

##### `reset_create_time` <a name="reset_create_time" id="@cdktn/provider-databricks.budget.Budget.resetCreateTime"></a>

```python
def reset_create_time() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.budget.Budget.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-databricks.budget.Budget.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.budget.Budget.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-databricks.budget.Budget.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_update_time` <a name="reset_update_time" id="@cdktn/provider-databricks.budget.Budget.resetUpdateTime"></a>

```python
def reset_update_time() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Budget resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.budget.Budget.isConstruct"></a>

```python
from cdktn_provider_databricks import budget

budget.Budget.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.budget.Budget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.budget.Budget.isTerraformElement"></a>

```python
from cdktn_provider_databricks import budget

budget.Budget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.budget.Budget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.budget.Budget.isTerraformResource"></a>

```python
from cdktn_provider_databricks import budget

budget.Budget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.budget.Budget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.budget.Budget.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import budget

budget.Budget.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Budget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.budget.Budget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.budget.Budget.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Budget to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.budget.Budget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Budget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.budget.Budget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Budget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.alertConfigurations">alert_configurations</a></code> | <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList">BudgetAlertConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference">BudgetFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.alertConfigurationsInput">alert_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.budgetConfigurationIdInput">budget_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.createTimeInput">create_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.filterInput">filter_input</a></code> | <code><a href="#@cdktn/provider-databricks.budget.BudgetFilter">BudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.updateTimeInput">update_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.budgetConfigurationId">budget_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.createTime">create_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.updateTime">update_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.budget.Budget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.budget.Budget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.budget.Budget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.budget.Budget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.budget.Budget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.budget.Budget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.budget.Budget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.budget.Budget.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.budget.Budget.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.budget.Budget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.budget.Budget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.budget.Budget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.budget.Budget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.budget.Budget.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alert_configurations`<sup>Required</sup> <a name="alert_configurations" id="@cdktn/provider-databricks.budget.Budget.property.alertConfigurations"></a>

```python
alert_configurations: BudgetAlertConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList">BudgetAlertConfigurationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-databricks.budget.Budget.property.filter"></a>

```python
filter: BudgetFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference">BudgetFilterOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-databricks.budget.Budget.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `alert_configurations_input`<sup>Optional</sup> <a name="alert_configurations_input" id="@cdktn/provider-databricks.budget.Budget.property.alertConfigurationsInput"></a>

```python
alert_configurations_input: IResolvable | typing.List[BudgetAlertConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>]

---

##### `budget_configuration_id_input`<sup>Optional</sup> <a name="budget_configuration_id_input" id="@cdktn/provider-databricks.budget.Budget.property.budgetConfigurationIdInput"></a>

```python
budget_configuration_id_input: str
```

- *Type:* str

---

##### `create_time_input`<sup>Optional</sup> <a name="create_time_input" id="@cdktn/provider-databricks.budget.Budget.property.createTimeInput"></a>

```python
create_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.budget.Budget.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-databricks.budget.Budget.property.filterInput"></a>

```python
filter_input: BudgetFilter
```

- *Type:* <a href="#@cdktn/provider-databricks.budget.BudgetFilter">BudgetFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.budget.Budget.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-databricks.budget.Budget.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `update_time_input`<sup>Optional</sup> <a name="update_time_input" id="@cdktn/provider-databricks.budget.Budget.property.updateTimeInput"></a>

```python
update_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-databricks.budget.Budget.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `budget_configuration_id`<sup>Required</sup> <a name="budget_configuration_id" id="@cdktn/provider-databricks.budget.Budget.property.budgetConfigurationId"></a>

```python
budget_configuration_id: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.budget.Budget.property.createTime"></a>

```python
create_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.budget.Budget.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.budget.Budget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-databricks.budget.Budget.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.budget.Budget.property.updateTime"></a>

```python
update_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.Budget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.budget.Budget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetAlertConfigurations <a name="BudgetAlertConfigurations" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurations.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetAlertConfigurations(
  action_configurations: IResolvable | typing.List[BudgetAlertConfigurationsActionConfigurations] = None,
  alert_configuration_id: str = None,
  principal_overrides: IResolvable | typing.List[BudgetAlertConfigurationsPrincipalOverrides] = None,
  quantity_threshold: str = None,
  quantity_type: str = None,
  scope_type: str = None,
  time_period: str = None,
  trigger_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations.property.actionConfigurations">action_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>]</code> | action_configurations block. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations.property.alertConfigurationId">alert_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#alert_configuration_id Budget#alert_configuration_id}. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations.property.principalOverrides">principal_overrides</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverrides">BudgetAlertConfigurationsPrincipalOverrides</a>]</code> | principal_overrides block. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations.property.quantityThreshold">quantity_threshold</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#quantity_threshold Budget#quantity_threshold}. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations.property.quantityType">quantity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#quantity_type Budget#quantity_type}. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations.property.scopeType">scope_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#scope_type Budget#scope_type}. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations.property.timePeriod">time_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#time_period Budget#time_period}. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations.property.triggerType">trigger_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#trigger_type Budget#trigger_type}. |

---

##### `action_configurations`<sup>Optional</sup> <a name="action_configurations" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurations.property.actionConfigurations"></a>

```python
action_configurations: IResolvable | typing.List[BudgetAlertConfigurationsActionConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>]

action_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#action_configurations Budget#action_configurations}

---

##### `alert_configuration_id`<sup>Optional</sup> <a name="alert_configuration_id" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurations.property.alertConfigurationId"></a>

```python
alert_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#alert_configuration_id Budget#alert_configuration_id}.

---

##### `principal_overrides`<sup>Optional</sup> <a name="principal_overrides" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurations.property.principalOverrides"></a>

```python
principal_overrides: IResolvable | typing.List[BudgetAlertConfigurationsPrincipalOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverrides">BudgetAlertConfigurationsPrincipalOverrides</a>]

principal_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#principal_overrides Budget#principal_overrides}

---

##### `quantity_threshold`<sup>Optional</sup> <a name="quantity_threshold" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurations.property.quantityThreshold"></a>

```python
quantity_threshold: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#quantity_threshold Budget#quantity_threshold}.

---

##### `quantity_type`<sup>Optional</sup> <a name="quantity_type" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurations.property.quantityType"></a>

```python
quantity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#quantity_type Budget#quantity_type}.

---

##### `scope_type`<sup>Optional</sup> <a name="scope_type" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurations.property.scopeType"></a>

```python
scope_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#scope_type Budget#scope_type}.

---

##### `time_period`<sup>Optional</sup> <a name="time_period" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurations.property.timePeriod"></a>

```python
time_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#time_period Budget#time_period}.

---

##### `trigger_type`<sup>Optional</sup> <a name="trigger_type" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurations.property.triggerType"></a>

```python
trigger_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#trigger_type Budget#trigger_type}.

---

### BudgetAlertConfigurationsActionConfigurations <a name="BudgetAlertConfigurationsActionConfigurations" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetAlertConfigurationsActionConfigurations(
  action_configuration_id: str = None,
  action_type: str = None,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.property.actionConfigurationId">action_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#action_configuration_id Budget#action_configuration_id}. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#action_type Budget#action_type}. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#target Budget#target}. |

---

##### `action_configuration_id`<sup>Optional</sup> <a name="action_configuration_id" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.property.actionConfigurationId"></a>

```python
action_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#action_configuration_id Budget#action_configuration_id}.

---

##### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#action_type Budget#action_type}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#target Budget#target}.

---

### BudgetAlertConfigurationsPrincipalOverrides <a name="BudgetAlertConfigurationsPrincipalOverrides" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverrides.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetAlertConfigurationsPrincipalOverrides(
  override_threshold: str = None,
  principal_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverrides.property.overrideThreshold">override_threshold</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#override_threshold Budget#override_threshold}. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverrides.property.principalId">principal_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#principal_id Budget#principal_id}. |

---

##### `override_threshold`<sup>Optional</sup> <a name="override_threshold" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverrides.property.overrideThreshold"></a>

```python
override_threshold: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#override_threshold Budget#override_threshold}.

---

##### `principal_id`<sup>Optional</sup> <a name="principal_id" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverrides.property.principalId"></a>

```python
principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#principal_id Budget#principal_id}.

---

### BudgetConfig <a name="BudgetConfig" id="@cdktn/provider-databricks.budget.BudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.budget.BudgetConfig.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str = None,
  alert_configurations: IResolvable | typing.List[BudgetAlertConfigurations] = None,
  budget_configuration_id: str = None,
  create_time: typing.Union[int, float] = None,
  display_name: str = None,
  filter: BudgetFilter = None,
  id: str = None,
  resource_type: str = None,
  update_time: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#account_id Budget#account_id}. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetConfig.property.alertConfigurations">alert_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>]</code> | alert_configurations block. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetConfig.property.budgetConfigurationId">budget_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#budget_configuration_id Budget#budget_configuration_id}. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetConfig.property.createTime">create_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#create_time Budget#create_time}. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#display_name Budget#display_name}. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-databricks.budget.BudgetFilter">BudgetFilter</a></code> | filter block. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#id Budget#id}. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#resource_type Budget#resource_type}. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetConfig.property.updateTime">update_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#update_time Budget#update_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.budget.BudgetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.budget.BudgetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.budget.BudgetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.budget.BudgetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.budget.BudgetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.budget.BudgetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.budget.BudgetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-databricks.budget.BudgetConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#account_id Budget#account_id}.

---

##### `alert_configurations`<sup>Optional</sup> <a name="alert_configurations" id="@cdktn/provider-databricks.budget.BudgetConfig.property.alertConfigurations"></a>

```python
alert_configurations: IResolvable | typing.List[BudgetAlertConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>]

alert_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#alert_configurations Budget#alert_configurations}

---

##### `budget_configuration_id`<sup>Optional</sup> <a name="budget_configuration_id" id="@cdktn/provider-databricks.budget.BudgetConfig.property.budgetConfigurationId"></a>

```python
budget_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#budget_configuration_id Budget#budget_configuration_id}.

---

##### `create_time`<sup>Optional</sup> <a name="create_time" id="@cdktn/provider-databricks.budget.BudgetConfig.property.createTime"></a>

```python
create_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#create_time Budget#create_time}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.budget.BudgetConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#display_name Budget#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.budget.BudgetConfig.property.filter"></a>

```python
filter: BudgetFilter
```

- *Type:* <a href="#@cdktn/provider-databricks.budget.BudgetFilter">BudgetFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#filter Budget#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.budget.BudgetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#id Budget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-databricks.budget.BudgetConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#resource_type Budget#resource_type}.

---

##### `update_time`<sup>Optional</sup> <a name="update_time" id="@cdktn/provider-databricks.budget.BudgetConfig.property.updateTime"></a>

```python
update_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#update_time Budget#update_time}.

---

### BudgetFilter <a name="BudgetFilter" id="@cdktn/provider-databricks.budget.BudgetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.budget.BudgetFilter.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetFilter(
  tags: IResolvable | typing.List[BudgetFilterTags] = None,
  workspace_id: BudgetFilterWorkspaceId = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilter.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>]</code> | tags block. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilter.property.workspaceId">workspace_id</a></code> | <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a></code> | workspace_id block. |

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-databricks.budget.BudgetFilter.property.tags"></a>

```python
tags: IResolvable | typing.List[BudgetFilterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#tags Budget#tags}

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.budget.BudgetFilter.property.workspaceId"></a>

```python
workspace_id: BudgetFilterWorkspaceId
```

- *Type:* <a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a>

workspace_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#workspace_id Budget#workspace_id}

---

### BudgetFilterTags <a name="BudgetFilterTags" id="@cdktn/provider-databricks.budget.BudgetFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.budget.BudgetFilterTags.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetFilterTags(
  key: str = None,
  value: BudgetFilterTagsValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#key Budget#key}. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTags.property.value">value</a></code> | <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a></code> | value block. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.budget.BudgetFilterTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#key Budget#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.budget.BudgetFilterTags.property.value"></a>

```python
value: BudgetFilterTagsValue
```

- *Type:* <a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#value Budget#value}

---

### BudgetFilterTagsValue <a name="BudgetFilterTagsValue" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValue.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetFilterTagsValue(
  operator: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValue.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#operator Budget#operator}. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValue.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#values Budget#values}. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValue.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#operator Budget#operator}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValue.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#values Budget#values}.

---

### BudgetFilterWorkspaceId <a name="BudgetFilterWorkspaceId" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceId.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetFilterWorkspaceId(
  operator: str = None,
  values: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceId.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#operator Budget#operator}. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceId.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#values Budget#values}. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceId.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#operator Budget#operator}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceId.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#values Budget#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetAlertConfigurationsActionConfigurationsList <a name="BudgetAlertConfigurationsActionConfigurationsList" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetAlertConfigurationsActionConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BudgetAlertConfigurationsActionConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BudgetAlertConfigurationsActionConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>]

---


### BudgetAlertConfigurationsActionConfigurationsOutputReference <a name="BudgetAlertConfigurationsActionConfigurationsOutputReference" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetAlertConfigurationsActionConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resetActionConfigurationId">reset_action_configuration_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resetActionType">reset_action_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action_configuration_id` <a name="reset_action_configuration_id" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resetActionConfigurationId"></a>

```python
def reset_action_configuration_id() -> None
```

##### `reset_action_type` <a name="reset_action_type" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resetActionType"></a>

```python
def reset_action_type() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionConfigurationIdInput">action_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionConfigurationId">action_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_configuration_id_input`<sup>Optional</sup> <a name="action_configuration_id_input" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionConfigurationIdInput"></a>

```python
action_configuration_id_input: str
```

- *Type:* str

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `action_configuration_id`<sup>Required</sup> <a name="action_configuration_id" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionConfigurationId"></a>

```python
action_configuration_id: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BudgetAlertConfigurationsActionConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>

---


### BudgetAlertConfigurationsList <a name="BudgetAlertConfigurationsList" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetAlertConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BudgetAlertConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BudgetAlertConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>]

---


### BudgetAlertConfigurationsOutputReference <a name="BudgetAlertConfigurationsOutputReference" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetAlertConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.putActionConfigurations">put_action_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.putPrincipalOverrides">put_principal_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetActionConfigurations">reset_action_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetAlertConfigurationId">reset_alert_configuration_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetPrincipalOverrides">reset_principal_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetQuantityThreshold">reset_quantity_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetQuantityType">reset_quantity_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetScopeType">reset_scope_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetTimePeriod">reset_time_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetTriggerType">reset_trigger_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action_configurations` <a name="put_action_configurations" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.putActionConfigurations"></a>

```python
def put_action_configurations(
  value: IResolvable | typing.List[BudgetAlertConfigurationsActionConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.putActionConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>]

---

##### `put_principal_overrides` <a name="put_principal_overrides" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.putPrincipalOverrides"></a>

```python
def put_principal_overrides(
  value: IResolvable | typing.List[BudgetAlertConfigurationsPrincipalOverrides]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.putPrincipalOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverrides">BudgetAlertConfigurationsPrincipalOverrides</a>]

---

##### `reset_action_configurations` <a name="reset_action_configurations" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetActionConfigurations"></a>

```python
def reset_action_configurations() -> None
```

##### `reset_alert_configuration_id` <a name="reset_alert_configuration_id" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetAlertConfigurationId"></a>

```python
def reset_alert_configuration_id() -> None
```

##### `reset_principal_overrides` <a name="reset_principal_overrides" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetPrincipalOverrides"></a>

```python
def reset_principal_overrides() -> None
```

##### `reset_quantity_threshold` <a name="reset_quantity_threshold" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetQuantityThreshold"></a>

```python
def reset_quantity_threshold() -> None
```

##### `reset_quantity_type` <a name="reset_quantity_type" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetQuantityType"></a>

```python
def reset_quantity_type() -> None
```

##### `reset_scope_type` <a name="reset_scope_type" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetScopeType"></a>

```python
def reset_scope_type() -> None
```

##### `reset_time_period` <a name="reset_time_period" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetTimePeriod"></a>

```python
def reset_time_period() -> None
```

##### `reset_trigger_type` <a name="reset_trigger_type" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetTriggerType"></a>

```python
def reset_trigger_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.actionConfigurations">action_configurations</a></code> | <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList">BudgetAlertConfigurationsActionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.principalOverrides">principal_overrides</a></code> | <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList">BudgetAlertConfigurationsPrincipalOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.actionConfigurationsInput">action_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.alertConfigurationIdInput">alert_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.principalOverridesInput">principal_overrides_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverrides">BudgetAlertConfigurationsPrincipalOverrides</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityThresholdInput">quantity_threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityTypeInput">quantity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.scopeTypeInput">scope_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.timePeriodInput">time_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.triggerTypeInput">trigger_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.alertConfigurationId">alert_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityThreshold">quantity_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityType">quantity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.scopeType">scope_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.timePeriod">time_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.triggerType">trigger_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_configurations`<sup>Required</sup> <a name="action_configurations" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.actionConfigurations"></a>

```python
action_configurations: BudgetAlertConfigurationsActionConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList">BudgetAlertConfigurationsActionConfigurationsList</a>

---

##### `principal_overrides`<sup>Required</sup> <a name="principal_overrides" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.principalOverrides"></a>

```python
principal_overrides: BudgetAlertConfigurationsPrincipalOverridesList
```

- *Type:* <a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList">BudgetAlertConfigurationsPrincipalOverridesList</a>

---

##### `action_configurations_input`<sup>Optional</sup> <a name="action_configurations_input" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.actionConfigurationsInput"></a>

```python
action_configurations_input: IResolvable | typing.List[BudgetAlertConfigurationsActionConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>]

---

##### `alert_configuration_id_input`<sup>Optional</sup> <a name="alert_configuration_id_input" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.alertConfigurationIdInput"></a>

```python
alert_configuration_id_input: str
```

- *Type:* str

---

##### `principal_overrides_input`<sup>Optional</sup> <a name="principal_overrides_input" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.principalOverridesInput"></a>

```python
principal_overrides_input: IResolvable | typing.List[BudgetAlertConfigurationsPrincipalOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverrides">BudgetAlertConfigurationsPrincipalOverrides</a>]

---

##### `quantity_threshold_input`<sup>Optional</sup> <a name="quantity_threshold_input" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityThresholdInput"></a>

```python
quantity_threshold_input: str
```

- *Type:* str

---

##### `quantity_type_input`<sup>Optional</sup> <a name="quantity_type_input" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityTypeInput"></a>

```python
quantity_type_input: str
```

- *Type:* str

---

##### `scope_type_input`<sup>Optional</sup> <a name="scope_type_input" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.scopeTypeInput"></a>

```python
scope_type_input: str
```

- *Type:* str

---

##### `time_period_input`<sup>Optional</sup> <a name="time_period_input" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.timePeriodInput"></a>

```python
time_period_input: str
```

- *Type:* str

---

##### `trigger_type_input`<sup>Optional</sup> <a name="trigger_type_input" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.triggerTypeInput"></a>

```python
trigger_type_input: str
```

- *Type:* str

---

##### `alert_configuration_id`<sup>Required</sup> <a name="alert_configuration_id" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.alertConfigurationId"></a>

```python
alert_configuration_id: str
```

- *Type:* str

---

##### `quantity_threshold`<sup>Required</sup> <a name="quantity_threshold" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityThreshold"></a>

```python
quantity_threshold: str
```

- *Type:* str

---

##### `quantity_type`<sup>Required</sup> <a name="quantity_type" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityType"></a>

```python
quantity_type: str
```

- *Type:* str

---

##### `scope_type`<sup>Required</sup> <a name="scope_type" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.scopeType"></a>

```python
scope_type: str
```

- *Type:* str

---

##### `time_period`<sup>Required</sup> <a name="time_period" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.timePeriod"></a>

```python
time_period: str
```

- *Type:* str

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.triggerType"></a>

```python
trigger_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BudgetAlertConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>

---


### BudgetAlertConfigurationsPrincipalOverridesList <a name="BudgetAlertConfigurationsPrincipalOverridesList" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetAlertConfigurationsPrincipalOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BudgetAlertConfigurationsPrincipalOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverrides">BudgetAlertConfigurationsPrincipalOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BudgetAlertConfigurationsPrincipalOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverrides">BudgetAlertConfigurationsPrincipalOverrides</a>]

---


### BudgetAlertConfigurationsPrincipalOverridesOutputReference <a name="BudgetAlertConfigurationsPrincipalOverridesOutputReference" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.resetOverrideThreshold">reset_override_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.resetPrincipalId">reset_principal_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_override_threshold` <a name="reset_override_threshold" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.resetOverrideThreshold"></a>

```python
def reset_override_threshold() -> None
```

##### `reset_principal_id` <a name="reset_principal_id" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.resetPrincipalId"></a>

```python
def reset_principal_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.property.overrideThresholdInput">override_threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.property.principalIdInput">principal_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.property.overrideThreshold">override_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.property.principalId">principal_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverrides">BudgetAlertConfigurationsPrincipalOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `override_threshold_input`<sup>Optional</sup> <a name="override_threshold_input" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.property.overrideThresholdInput"></a>

```python
override_threshold_input: str
```

- *Type:* str

---

##### `principal_id_input`<sup>Optional</sup> <a name="principal_id_input" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.property.principalIdInput"></a>

```python
principal_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `override_threshold`<sup>Required</sup> <a name="override_threshold" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.property.overrideThreshold"></a>

```python
override_threshold: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.property.principalId"></a>

```python
principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverridesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BudgetAlertConfigurationsPrincipalOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.budget.BudgetAlertConfigurationsPrincipalOverrides">BudgetAlertConfigurationsPrincipalOverrides</a>

---


### BudgetFilterOutputReference <a name="BudgetFilterOutputReference" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.putWorkspaceId">put_workspace_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BudgetFilterTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>]

---

##### `put_workspace_id` <a name="put_workspace_id" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.putWorkspaceId"></a>

```python
def put_workspace_id(
  operator: str = None,
  values: typing.List[typing.Union[int, float]] = None
) -> None
```

###### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.putWorkspaceId.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#operator Budget#operator}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.putWorkspaceId.parameter.values"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#values Budget#values}.

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsList">BudgetFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.property.workspaceId">workspace_id</a></code> | <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference">BudgetFilterWorkspaceIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.budget.BudgetFilter">BudgetFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.property.tags"></a>

```python
tags: BudgetFilterTagsList
```

- *Type:* <a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsList">BudgetFilterTagsList</a>

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.property.workspaceId"></a>

```python
workspace_id: BudgetFilterWorkspaceIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference">BudgetFilterWorkspaceIdOutputReference</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BudgetFilterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: BudgetFilterWorkspaceId
```

- *Type:* <a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.budget.BudgetFilterOutputReference.property.internalValue"></a>

```python
internal_value: BudgetFilter
```

- *Type:* <a href="#@cdktn/provider-databricks.budget.BudgetFilter">BudgetFilter</a>

---


### BudgetFilterTagsList <a name="BudgetFilterTagsList" id="@cdktn/provider-databricks.budget.BudgetFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.budget.BudgetFilterTagsList.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetFilterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.budget.BudgetFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.budget.BudgetFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.budget.BudgetFilterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.budget.BudgetFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.budget.BudgetFilterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.budget.BudgetFilterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.budget.BudgetFilterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.budget.BudgetFilterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.budget.BudgetFilterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BudgetFilterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.budget.BudgetFilterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.budget.BudgetFilterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.budget.BudgetFilterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.budget.BudgetFilterTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BudgetFilterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>]

---


### BudgetFilterTagsOutputReference <a name="BudgetFilterTagsOutputReference" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetFilterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value` <a name="put_value" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.putValue"></a>

```python
def put_value(
  operator: str = None,
  values: typing.List[str] = None
) -> None
```

###### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.putValue.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#operator Budget#operator}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.putValue.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/budget#values Budget#values}.

---

##### `reset_key` <a name="reset_key" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference">BudgetFilterTagsValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.property.valueInput">value_input</a></code> | <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.property.value"></a>

```python
value: BudgetFilterTagsValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference">BudgetFilterTagsValueOutputReference</a>

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.property.valueInput"></a>

```python
value_input: BudgetFilterTagsValue
```

- *Type:* <a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.budget.BudgetFilterTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BudgetFilterTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>

---


### BudgetFilterTagsValueOutputReference <a name="BudgetFilterTagsValueOutputReference" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetFilterTagsValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.internalValue"></a>

```python
internal_value: BudgetFilterTagsValue
```

- *Type:* <a href="#@cdktn/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a>

---


### BudgetFilterWorkspaceIdOutputReference <a name="BudgetFilterWorkspaceIdOutputReference" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import budget

budget.BudgetFilterWorkspaceIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.internalValue"></a>

```python
internal_value: BudgetFilterWorkspaceId
```

- *Type:* <a href="#@cdktn/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a>

---



