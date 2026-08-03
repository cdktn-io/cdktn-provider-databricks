# `postgresDataApi` Submodule <a name="`postgresDataApi` Submodule" id="@cdktn/provider-databricks.postgresDataApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresDataApi <a name="PostgresDataApi" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api databricks_postgres_data_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_data_api

postgresDataApi.PostgresDataApi(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  provider_config: PostgresDataApiProviderConfig = None,
  spec: PostgresDataApiSpec = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#parent PostgresDataApi#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#provider_config PostgresDataApi#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#spec PostgresDataApi#spec}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#parent PostgresDataApi#parent}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#provider_config PostgresDataApi#provider_config}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#spec PostgresDataApi#spec}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetSpec">reset_spec</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#workspace_id PostgresDataApi#workspace_id}.

---

##### `put_spec` <a name="put_spec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec"></a>

```python
def put_spec(
  db_aggregates_enabled: bool | IResolvable = None,
  db_extra_search_path: typing.List[str] = None,
  db_max_rows: typing.Union[int, float] = None,
  db_schemas: typing.List[str] = None,
  jwt_cache_max_lifetime: str = None,
  jwt_role_claim_key: str = None,
  openapi_mode: str = None,
  server_cors_allowed_origins: typing.List[str] = None,
  server_timing_enabled: bool | IResolvable = None
) -> None
```

###### `db_aggregates_enabled`<sup>Optional</sup> <a name="db_aggregates_enabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec.parameter.dbAggregatesEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#db_aggregates_enabled PostgresDataApi#db_aggregates_enabled}.

---

###### `db_extra_search_path`<sup>Optional</sup> <a name="db_extra_search_path" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec.parameter.dbExtraSearchPath"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#db_extra_search_path PostgresDataApi#db_extra_search_path}.

---

###### `db_max_rows`<sup>Optional</sup> <a name="db_max_rows" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec.parameter.dbMaxRows"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#db_max_rows PostgresDataApi#db_max_rows}.

---

###### `db_schemas`<sup>Optional</sup> <a name="db_schemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec.parameter.dbSchemas"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#db_schemas PostgresDataApi#db_schemas}.

---

###### `jwt_cache_max_lifetime`<sup>Optional</sup> <a name="jwt_cache_max_lifetime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec.parameter.jwtCacheMaxLifetime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#jwt_cache_max_lifetime PostgresDataApi#jwt_cache_max_lifetime}.

---

###### `jwt_role_claim_key`<sup>Optional</sup> <a name="jwt_role_claim_key" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec.parameter.jwtRoleClaimKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#jwt_role_claim_key PostgresDataApi#jwt_role_claim_key}.

---

###### `openapi_mode`<sup>Optional</sup> <a name="openapi_mode" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec.parameter.openapiMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#openapi_mode PostgresDataApi#openapi_mode}.

---

###### `server_cors_allowed_origins`<sup>Optional</sup> <a name="server_cors_allowed_origins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec.parameter.serverCorsAllowedOrigins"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#server_cors_allowed_origins PostgresDataApi#server_cors_allowed_origins}.

---

###### `server_timing_enabled`<sup>Optional</sup> <a name="server_timing_enabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec.parameter.serverTimingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#server_timing_enabled PostgresDataApi#server_timing_enabled}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetSpec"></a>

```python
def reset_spec() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PostgresDataApi resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isConstruct"></a>

```python
from cdktn_provider_databricks import postgres_data_api

postgresDataApi.PostgresDataApi.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformElement"></a>

```python
from cdktn_provider_databricks import postgres_data_api

postgresDataApi.PostgresDataApi.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformResource"></a>

```python
from cdktn_provider_databricks import postgres_data_api

postgresDataApi.PostgresDataApi.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import postgres_data_api

postgresDataApi.PostgresDataApi.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PostgresDataApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PostgresDataApi to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PostgresDataApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PostgresDataApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference">PostgresDataApiProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference">PostgresDataApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference">PostgresDataApiStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.specInput">spec_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.providerConfig"></a>

```python
provider_config: PostgresDataApiProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference">PostgresDataApiProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.spec"></a>

```python
spec: PostgresDataApiSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference">PostgresDataApiSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.status"></a>

```python
status: PostgresDataApiStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference">PostgresDataApiStatusOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | PostgresDataApiProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a>

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.specInput"></a>

```python
spec_input: IResolvable | PostgresDataApiSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresDataApiConfig <a name="PostgresDataApiConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_data_api

postgresDataApi.PostgresDataApiConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  provider_config: PostgresDataApiProviderConfig = None,
  spec: PostgresDataApiSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#parent PostgresDataApi#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#provider_config PostgresDataApi#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#spec PostgresDataApi#spec}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#parent PostgresDataApi#parent}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.providerConfig"></a>

```python
provider_config: PostgresDataApiProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#provider_config PostgresDataApi#provider_config}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.spec"></a>

```python
spec: PostgresDataApiSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#spec PostgresDataApi#spec}.

---

### PostgresDataApiProviderConfig <a name="PostgresDataApiProviderConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_data_api

postgresDataApi.PostgresDataApiProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#workspace_id PostgresDataApi#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#workspace_id PostgresDataApi#workspace_id}.

---

### PostgresDataApiSpec <a name="PostgresDataApiSpec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_data_api

postgresDataApi.PostgresDataApiSpec(
  db_aggregates_enabled: bool | IResolvable = None,
  db_extra_search_path: typing.List[str] = None,
  db_max_rows: typing.Union[int, float] = None,
  db_schemas: typing.List[str] = None,
  jwt_cache_max_lifetime: str = None,
  jwt_role_claim_key: str = None,
  openapi_mode: str = None,
  server_cors_allowed_origins: typing.List[str] = None,
  server_timing_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbAggregatesEnabled">db_aggregates_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#db_aggregates_enabled PostgresDataApi#db_aggregates_enabled}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbExtraSearchPath">db_extra_search_path</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#db_extra_search_path PostgresDataApi#db_extra_search_path}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbMaxRows">db_max_rows</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#db_max_rows PostgresDataApi#db_max_rows}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbSchemas">db_schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#db_schemas PostgresDataApi#db_schemas}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.jwtCacheMaxLifetime">jwt_cache_max_lifetime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#jwt_cache_max_lifetime PostgresDataApi#jwt_cache_max_lifetime}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.jwtRoleClaimKey">jwt_role_claim_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#jwt_role_claim_key PostgresDataApi#jwt_role_claim_key}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.openapiMode">openapi_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#openapi_mode PostgresDataApi#openapi_mode}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.serverCorsAllowedOrigins">server_cors_allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#server_cors_allowed_origins PostgresDataApi#server_cors_allowed_origins}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.serverTimingEnabled">server_timing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#server_timing_enabled PostgresDataApi#server_timing_enabled}. |

---

##### `db_aggregates_enabled`<sup>Optional</sup> <a name="db_aggregates_enabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbAggregatesEnabled"></a>

```python
db_aggregates_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#db_aggregates_enabled PostgresDataApi#db_aggregates_enabled}.

---

##### `db_extra_search_path`<sup>Optional</sup> <a name="db_extra_search_path" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbExtraSearchPath"></a>

```python
db_extra_search_path: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#db_extra_search_path PostgresDataApi#db_extra_search_path}.

---

##### `db_max_rows`<sup>Optional</sup> <a name="db_max_rows" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbMaxRows"></a>

```python
db_max_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#db_max_rows PostgresDataApi#db_max_rows}.

---

##### `db_schemas`<sup>Optional</sup> <a name="db_schemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbSchemas"></a>

```python
db_schemas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#db_schemas PostgresDataApi#db_schemas}.

---

##### `jwt_cache_max_lifetime`<sup>Optional</sup> <a name="jwt_cache_max_lifetime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.jwtCacheMaxLifetime"></a>

```python
jwt_cache_max_lifetime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#jwt_cache_max_lifetime PostgresDataApi#jwt_cache_max_lifetime}.

---

##### `jwt_role_claim_key`<sup>Optional</sup> <a name="jwt_role_claim_key" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.jwtRoleClaimKey"></a>

```python
jwt_role_claim_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#jwt_role_claim_key PostgresDataApi#jwt_role_claim_key}.

---

##### `openapi_mode`<sup>Optional</sup> <a name="openapi_mode" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.openapiMode"></a>

```python
openapi_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#openapi_mode PostgresDataApi#openapi_mode}.

---

##### `server_cors_allowed_origins`<sup>Optional</sup> <a name="server_cors_allowed_origins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.serverCorsAllowedOrigins"></a>

```python
server_cors_allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#server_cors_allowed_origins PostgresDataApi#server_cors_allowed_origins}.

---

##### `server_timing_enabled`<sup>Optional</sup> <a name="server_timing_enabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.serverTimingEnabled"></a>

```python
server_timing_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_data_api#server_timing_enabled PostgresDataApi#server_timing_enabled}.

---

### PostgresDataApiStatus <a name="PostgresDataApiStatus" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatus.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_data_api

postgresDataApi.PostgresDataApiStatus()
```


## Classes <a name="Classes" id="Classes"></a>

### PostgresDataApiProviderConfigOutputReference <a name="PostgresDataApiProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_data_api

postgresDataApi.PostgresDataApiProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresDataApiProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a>

---


### PostgresDataApiSpecOutputReference <a name="PostgresDataApiSpecOutputReference" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_data_api

postgresDataApi.PostgresDataApiSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbAggregatesEnabled">reset_db_aggregates_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbExtraSearchPath">reset_db_extra_search_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbMaxRows">reset_db_max_rows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbSchemas">reset_db_schemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetJwtCacheMaxLifetime">reset_jwt_cache_max_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetJwtRoleClaimKey">reset_jwt_role_claim_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetOpenapiMode">reset_openapi_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetServerCorsAllowedOrigins">reset_server_cors_allowed_origins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetServerTimingEnabled">reset_server_timing_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_db_aggregates_enabled` <a name="reset_db_aggregates_enabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbAggregatesEnabled"></a>

```python
def reset_db_aggregates_enabled() -> None
```

##### `reset_db_extra_search_path` <a name="reset_db_extra_search_path" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbExtraSearchPath"></a>

```python
def reset_db_extra_search_path() -> None
```

##### `reset_db_max_rows` <a name="reset_db_max_rows" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbMaxRows"></a>

```python
def reset_db_max_rows() -> None
```

##### `reset_db_schemas` <a name="reset_db_schemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbSchemas"></a>

```python
def reset_db_schemas() -> None
```

##### `reset_jwt_cache_max_lifetime` <a name="reset_jwt_cache_max_lifetime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetJwtCacheMaxLifetime"></a>

```python
def reset_jwt_cache_max_lifetime() -> None
```

##### `reset_jwt_role_claim_key` <a name="reset_jwt_role_claim_key" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetJwtRoleClaimKey"></a>

```python
def reset_jwt_role_claim_key() -> None
```

##### `reset_openapi_mode` <a name="reset_openapi_mode" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetOpenapiMode"></a>

```python
def reset_openapi_mode() -> None
```

##### `reset_server_cors_allowed_origins` <a name="reset_server_cors_allowed_origins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetServerCorsAllowedOrigins"></a>

```python
def reset_server_cors_allowed_origins() -> None
```

##### `reset_server_timing_enabled` <a name="reset_server_timing_enabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetServerTimingEnabled"></a>

```python
def reset_server_timing_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbAggregatesEnabledInput">db_aggregates_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbExtraSearchPathInput">db_extra_search_path_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbMaxRowsInput">db_max_rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbSchemasInput">db_schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetimeInput">jwt_cache_max_lifetime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtRoleClaimKeyInput">jwt_role_claim_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.openapiModeInput">openapi_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverCorsAllowedOriginsInput">server_cors_allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverTimingEnabledInput">server_timing_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbAggregatesEnabled">db_aggregates_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbExtraSearchPath">db_extra_search_path</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbMaxRows">db_max_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbSchemas">db_schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetime">jwt_cache_max_lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtRoleClaimKey">jwt_role_claim_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.openapiMode">openapi_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverCorsAllowedOrigins">server_cors_allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverTimingEnabled">server_timing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_aggregates_enabled_input`<sup>Optional</sup> <a name="db_aggregates_enabled_input" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbAggregatesEnabledInput"></a>

```python
db_aggregates_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `db_extra_search_path_input`<sup>Optional</sup> <a name="db_extra_search_path_input" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbExtraSearchPathInput"></a>

```python
db_extra_search_path_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_max_rows_input`<sup>Optional</sup> <a name="db_max_rows_input" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbMaxRowsInput"></a>

```python
db_max_rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_schemas_input`<sup>Optional</sup> <a name="db_schemas_input" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbSchemasInput"></a>

```python
db_schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jwt_cache_max_lifetime_input`<sup>Optional</sup> <a name="jwt_cache_max_lifetime_input" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetimeInput"></a>

```python
jwt_cache_max_lifetime_input: str
```

- *Type:* str

---

##### `jwt_role_claim_key_input`<sup>Optional</sup> <a name="jwt_role_claim_key_input" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtRoleClaimKeyInput"></a>

```python
jwt_role_claim_key_input: str
```

- *Type:* str

---

##### `openapi_mode_input`<sup>Optional</sup> <a name="openapi_mode_input" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.openapiModeInput"></a>

```python
openapi_mode_input: str
```

- *Type:* str

---

##### `server_cors_allowed_origins_input`<sup>Optional</sup> <a name="server_cors_allowed_origins_input" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverCorsAllowedOriginsInput"></a>

```python
server_cors_allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_timing_enabled_input`<sup>Optional</sup> <a name="server_timing_enabled_input" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverTimingEnabledInput"></a>

```python
server_timing_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `db_aggregates_enabled`<sup>Required</sup> <a name="db_aggregates_enabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbAggregatesEnabled"></a>

```python
db_aggregates_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `db_extra_search_path`<sup>Required</sup> <a name="db_extra_search_path" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbExtraSearchPath"></a>

```python
db_extra_search_path: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_max_rows`<sup>Required</sup> <a name="db_max_rows" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbMaxRows"></a>

```python
db_max_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_schemas`<sup>Required</sup> <a name="db_schemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbSchemas"></a>

```python
db_schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jwt_cache_max_lifetime`<sup>Required</sup> <a name="jwt_cache_max_lifetime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetime"></a>

```python
jwt_cache_max_lifetime: str
```

- *Type:* str

---

##### `jwt_role_claim_key`<sup>Required</sup> <a name="jwt_role_claim_key" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtRoleClaimKey"></a>

```python
jwt_role_claim_key: str
```

- *Type:* str

---

##### `openapi_mode`<sup>Required</sup> <a name="openapi_mode" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.openapiMode"></a>

```python
openapi_mode: str
```

- *Type:* str

---

##### `server_cors_allowed_origins`<sup>Required</sup> <a name="server_cors_allowed_origins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverCorsAllowedOrigins"></a>

```python
server_cors_allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_timing_enabled`<sup>Required</sup> <a name="server_timing_enabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverTimingEnabled"></a>

```python
server_timing_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresDataApiSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a>

---


### PostgresDataApiStatusOutputReference <a name="PostgresDataApiStatusOutputReference" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_data_api

postgresDataApi.PostgresDataApiStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.availableSchemas">available_schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbAggregatesEnabled">db_aggregates_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbExtraSearchPath">db_extra_search_path</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbMaxRows">db_max_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbSchemas">db_schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.jwtCacheMaxLifetime">jwt_cache_max_lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.jwtRoleClaimKey">jwt_role_claim_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.openapiMode">openapi_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.serverCorsAllowedOrigins">server_cors_allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.serverTimingEnabled">server_timing_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatus">PostgresDataApiStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_schemas`<sup>Required</sup> <a name="available_schemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.availableSchemas"></a>

```python
available_schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_aggregates_enabled`<sup>Required</sup> <a name="db_aggregates_enabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbAggregatesEnabled"></a>

```python
db_aggregates_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `db_extra_search_path`<sup>Required</sup> <a name="db_extra_search_path" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbExtraSearchPath"></a>

```python
db_extra_search_path: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_max_rows`<sup>Required</sup> <a name="db_max_rows" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbMaxRows"></a>

```python
db_max_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_schemas`<sup>Required</sup> <a name="db_schemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbSchemas"></a>

```python
db_schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jwt_cache_max_lifetime`<sup>Required</sup> <a name="jwt_cache_max_lifetime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.jwtCacheMaxLifetime"></a>

```python
jwt_cache_max_lifetime: str
```

- *Type:* str

---

##### `jwt_role_claim_key`<sup>Required</sup> <a name="jwt_role_claim_key" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.jwtRoleClaimKey"></a>

```python
jwt_role_claim_key: str
```

- *Type:* str

---

##### `openapi_mode`<sup>Required</sup> <a name="openapi_mode" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.openapiMode"></a>

```python
openapi_mode: str
```

- *Type:* str

---

##### `server_cors_allowed_origins`<sup>Required</sup> <a name="server_cors_allowed_origins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.serverCorsAllowedOrigins"></a>

```python
server_cors_allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_timing_enabled`<sup>Required</sup> <a name="server_timing_enabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.serverTimingEnabled"></a>

```python
server_timing_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.internalValue"></a>

```python
internal_value: PostgresDataApiStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatus">PostgresDataApiStatus</a>

---



