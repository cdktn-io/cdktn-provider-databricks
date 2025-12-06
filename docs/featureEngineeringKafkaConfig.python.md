# `featureEngineeringKafkaConfig` Submodule <a name="`featureEngineeringKafkaConfig` Submodule" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureEngineeringKafkaConfig <a name="FeatureEngineeringKafkaConfig" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config databricks_feature_engineering_kafka_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_config: FeatureEngineeringKafkaConfigAuthConfig,
  bootstrap_servers: str,
  subscription_mode: FeatureEngineeringKafkaConfigSubscriptionMode,
  extra_options: typing.Mapping[str] = None,
  key_schema: FeatureEngineeringKafkaConfigKeySchema = None,
  value_schema: FeatureEngineeringKafkaConfigValueSchema = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.authConfig">auth_config</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#auth_config FeatureEngineeringKafkaConfig#auth_config}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.bootstrapServers">bootstrap_servers</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#bootstrap_servers FeatureEngineeringKafkaConfig#bootstrap_servers}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.subscriptionMode">subscription_mode</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#subscription_mode FeatureEngineeringKafkaConfig#subscription_mode}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.extraOptions">extra_options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#extra_options FeatureEngineeringKafkaConfig#extra_options}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.keySchema">key_schema</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#key_schema FeatureEngineeringKafkaConfig#key_schema}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.valueSchema">value_schema</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#value_schema FeatureEngineeringKafkaConfig#value_schema}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `auth_config`<sup>Required</sup> <a name="auth_config" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.authConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#auth_config FeatureEngineeringKafkaConfig#auth_config}.

---

##### `bootstrap_servers`<sup>Required</sup> <a name="bootstrap_servers" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.bootstrapServers"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#bootstrap_servers FeatureEngineeringKafkaConfig#bootstrap_servers}.

---

##### `subscription_mode`<sup>Required</sup> <a name="subscription_mode" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.subscriptionMode"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#subscription_mode FeatureEngineeringKafkaConfig#subscription_mode}.

---

##### `extra_options`<sup>Optional</sup> <a name="extra_options" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.extraOptions"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#extra_options FeatureEngineeringKafkaConfig#extra_options}.

---

##### `key_schema`<sup>Optional</sup> <a name="key_schema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.keySchema"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#key_schema FeatureEngineeringKafkaConfig#key_schema}.

---

##### `value_schema`<sup>Optional</sup> <a name="value_schema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.valueSchema"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#value_schema FeatureEngineeringKafkaConfig#value_schema}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putAuthConfig">put_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putKeySchema">put_key_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode">put_subscription_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putValueSchema">put_value_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetExtraOptions">reset_extra_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetKeySchema">reset_key_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetValueSchema">reset_value_schema</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auth_config` <a name="put_auth_config" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putAuthConfig"></a>

```python
def put_auth_config(
  uc_service_credential_name: str = None
) -> None
```

###### `uc_service_credential_name`<sup>Optional</sup> <a name="uc_service_credential_name" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putAuthConfig.parameter.ucServiceCredentialName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#uc_service_credential_name FeatureEngineeringKafkaConfig#uc_service_credential_name}.

---

##### `put_key_schema` <a name="put_key_schema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putKeySchema"></a>

```python
def put_key_schema(
  json_schema: str = None
) -> None
```

###### `json_schema`<sup>Optional</sup> <a name="json_schema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putKeySchema.parameter.jsonSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}.

---

##### `put_subscription_mode` <a name="put_subscription_mode" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode"></a>

```python
def put_subscription_mode(
  assign: str = None,
  subscribe: str = None,
  subscribe_pattern: str = None
) -> None
```

###### `assign`<sup>Optional</sup> <a name="assign" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode.parameter.assign"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#assign FeatureEngineeringKafkaConfig#assign}.

---

###### `subscribe`<sup>Optional</sup> <a name="subscribe" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode.parameter.subscribe"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#subscribe FeatureEngineeringKafkaConfig#subscribe}.

---

###### `subscribe_pattern`<sup>Optional</sup> <a name="subscribe_pattern" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode.parameter.subscribePattern"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#subscribe_pattern FeatureEngineeringKafkaConfig#subscribe_pattern}.

---

##### `put_value_schema` <a name="put_value_schema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putValueSchema"></a>

```python
def put_value_schema(
  json_schema: str = None
) -> None
```

###### `json_schema`<sup>Optional</sup> <a name="json_schema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putValueSchema.parameter.jsonSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}.

---

##### `reset_extra_options` <a name="reset_extra_options" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetExtraOptions"></a>

```python
def reset_extra_options() -> None
```

##### `reset_key_schema` <a name="reset_key_schema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetKeySchema"></a>

```python
def reset_key_schema() -> None
```

##### `reset_value_schema` <a name="reset_value_schema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetValueSchema"></a>

```python
def reset_value_schema() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FeatureEngineeringKafkaConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FeatureEngineeringKafkaConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FeatureEngineeringKafkaConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FeatureEngineeringKafkaConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FeatureEngineeringKafkaConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfig">auth_config</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference">FeatureEngineeringKafkaConfigAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchema">key_schema</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference">FeatureEngineeringKafkaConfigKeySchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionMode">subscription_mode</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference">FeatureEngineeringKafkaConfigSubscriptionModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchema">value_schema</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference">FeatureEngineeringKafkaConfigValueSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfigInput">auth_config_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServersInput">bootstrap_servers_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptionsInput">extra_options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchemaInput">key_schema_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionModeInput">subscription_mode_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchemaInput">value_schema_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServers">bootstrap_servers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptions">extra_options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `auth_config`<sup>Required</sup> <a name="auth_config" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfig"></a>

```python
auth_config: FeatureEngineeringKafkaConfigAuthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference">FeatureEngineeringKafkaConfigAuthConfigOutputReference</a>

---

##### `key_schema`<sup>Required</sup> <a name="key_schema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchema"></a>

```python
key_schema: FeatureEngineeringKafkaConfigKeySchemaOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference">FeatureEngineeringKafkaConfigKeySchemaOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `subscription_mode`<sup>Required</sup> <a name="subscription_mode" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionMode"></a>

```python
subscription_mode: FeatureEngineeringKafkaConfigSubscriptionModeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference">FeatureEngineeringKafkaConfigSubscriptionModeOutputReference</a>

---

##### `value_schema`<sup>Required</sup> <a name="value_schema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchema"></a>

```python
value_schema: FeatureEngineeringKafkaConfigValueSchemaOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference">FeatureEngineeringKafkaConfigValueSchemaOutputReference</a>

---

##### `auth_config_input`<sup>Optional</sup> <a name="auth_config_input" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfigInput"></a>

```python
auth_config_input: IResolvable | FeatureEngineeringKafkaConfigAuthConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

---

##### `bootstrap_servers_input`<sup>Optional</sup> <a name="bootstrap_servers_input" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServersInput"></a>

```python
bootstrap_servers_input: str
```

- *Type:* str

---

##### `extra_options_input`<sup>Optional</sup> <a name="extra_options_input" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptionsInput"></a>

```python
extra_options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `key_schema_input`<sup>Optional</sup> <a name="key_schema_input" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchemaInput"></a>

```python
key_schema_input: IResolvable | FeatureEngineeringKafkaConfigKeySchema
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

---

##### `subscription_mode_input`<sup>Optional</sup> <a name="subscription_mode_input" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionModeInput"></a>

```python
subscription_mode_input: IResolvable | FeatureEngineeringKafkaConfigSubscriptionMode
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

---

##### `value_schema_input`<sup>Optional</sup> <a name="value_schema_input" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchemaInput"></a>

```python
value_schema_input: IResolvable | FeatureEngineeringKafkaConfigValueSchema
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

---

##### `bootstrap_servers`<sup>Required</sup> <a name="bootstrap_servers" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServers"></a>

```python
bootstrap_servers: str
```

- *Type:* str

---

##### `extra_options`<sup>Required</sup> <a name="extra_options" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptions"></a>

```python
extra_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureEngineeringKafkaConfigAuthConfig <a name="FeatureEngineeringKafkaConfigAuthConfig" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig(
  uc_service_credential_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.property.ucServiceCredentialName">uc_service_credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#uc_service_credential_name FeatureEngineeringKafkaConfig#uc_service_credential_name}. |

---

##### `uc_service_credential_name`<sup>Optional</sup> <a name="uc_service_credential_name" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.property.ucServiceCredentialName"></a>

```python
uc_service_credential_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#uc_service_credential_name FeatureEngineeringKafkaConfig#uc_service_credential_name}.

---

### FeatureEngineeringKafkaConfigConfig <a name="FeatureEngineeringKafkaConfigConfig" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_config: FeatureEngineeringKafkaConfigAuthConfig,
  bootstrap_servers: str,
  subscription_mode: FeatureEngineeringKafkaConfigSubscriptionMode,
  extra_options: typing.Mapping[str] = None,
  key_schema: FeatureEngineeringKafkaConfigKeySchema = None,
  value_schema: FeatureEngineeringKafkaConfigValueSchema = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.authConfig">auth_config</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#auth_config FeatureEngineeringKafkaConfig#auth_config}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.bootstrapServers">bootstrap_servers</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#bootstrap_servers FeatureEngineeringKafkaConfig#bootstrap_servers}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.subscriptionMode">subscription_mode</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#subscription_mode FeatureEngineeringKafkaConfig#subscription_mode}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.extraOptions">extra_options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#extra_options FeatureEngineeringKafkaConfig#extra_options}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.keySchema">key_schema</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#key_schema FeatureEngineeringKafkaConfig#key_schema}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.valueSchema">value_schema</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#value_schema FeatureEngineeringKafkaConfig#value_schema}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `auth_config`<sup>Required</sup> <a name="auth_config" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.authConfig"></a>

```python
auth_config: FeatureEngineeringKafkaConfigAuthConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#auth_config FeatureEngineeringKafkaConfig#auth_config}.

---

##### `bootstrap_servers`<sup>Required</sup> <a name="bootstrap_servers" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.bootstrapServers"></a>

```python
bootstrap_servers: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#bootstrap_servers FeatureEngineeringKafkaConfig#bootstrap_servers}.

---

##### `subscription_mode`<sup>Required</sup> <a name="subscription_mode" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.subscriptionMode"></a>

```python
subscription_mode: FeatureEngineeringKafkaConfigSubscriptionMode
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#subscription_mode FeatureEngineeringKafkaConfig#subscription_mode}.

---

##### `extra_options`<sup>Optional</sup> <a name="extra_options" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.extraOptions"></a>

```python
extra_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#extra_options FeatureEngineeringKafkaConfig#extra_options}.

---

##### `key_schema`<sup>Optional</sup> <a name="key_schema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.keySchema"></a>

```python
key_schema: FeatureEngineeringKafkaConfigKeySchema
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#key_schema FeatureEngineeringKafkaConfig#key_schema}.

---

##### `value_schema`<sup>Optional</sup> <a name="value_schema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.valueSchema"></a>

```python
value_schema: FeatureEngineeringKafkaConfigValueSchema
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#value_schema FeatureEngineeringKafkaConfig#value_schema}.

---

### FeatureEngineeringKafkaConfigKeySchema <a name="FeatureEngineeringKafkaConfigKeySchema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema(
  json_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.property.jsonSchema">json_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}. |

---

##### `json_schema`<sup>Optional</sup> <a name="json_schema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.property.jsonSchema"></a>

```python
json_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}.

---

### FeatureEngineeringKafkaConfigSubscriptionMode <a name="FeatureEngineeringKafkaConfigSubscriptionMode" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode(
  assign: str = None,
  subscribe: str = None,
  subscribe_pattern: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.assign">assign</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#assign FeatureEngineeringKafkaConfig#assign}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribe">subscribe</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#subscribe FeatureEngineeringKafkaConfig#subscribe}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribePattern">subscribe_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#subscribe_pattern FeatureEngineeringKafkaConfig#subscribe_pattern}. |

---

##### `assign`<sup>Optional</sup> <a name="assign" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.assign"></a>

```python
assign: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#assign FeatureEngineeringKafkaConfig#assign}.

---

##### `subscribe`<sup>Optional</sup> <a name="subscribe" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribe"></a>

```python
subscribe: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#subscribe FeatureEngineeringKafkaConfig#subscribe}.

---

##### `subscribe_pattern`<sup>Optional</sup> <a name="subscribe_pattern" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribePattern"></a>

```python
subscribe_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#subscribe_pattern FeatureEngineeringKafkaConfig#subscribe_pattern}.

---

### FeatureEngineeringKafkaConfigValueSchema <a name="FeatureEngineeringKafkaConfigValueSchema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema(
  json_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.property.jsonSchema">json_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}. |

---

##### `json_schema`<sup>Optional</sup> <a name="json_schema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.property.jsonSchema"></a>

```python
json_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureEngineeringKafkaConfigAuthConfigOutputReference <a name="FeatureEngineeringKafkaConfigAuthConfigOutputReference" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resetUcServiceCredentialName">reset_uc_service_credential_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uc_service_credential_name` <a name="reset_uc_service_credential_name" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resetUcServiceCredentialName"></a>

```python
def reset_uc_service_credential_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialNameInput">uc_service_credential_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialName">uc_service_credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uc_service_credential_name_input`<sup>Optional</sup> <a name="uc_service_credential_name_input" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialNameInput"></a>

```python
uc_service_credential_name_input: str
```

- *Type:* str

---

##### `uc_service_credential_name`<sup>Required</sup> <a name="uc_service_credential_name" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialName"></a>

```python
uc_service_credential_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigAuthConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

---


### FeatureEngineeringKafkaConfigKeySchemaOutputReference <a name="FeatureEngineeringKafkaConfigKeySchemaOutputReference" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resetJsonSchema">reset_json_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_json_schema` <a name="reset_json_schema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resetJsonSchema"></a>

```python
def reset_json_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchemaInput">json_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchema">json_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_schema_input`<sup>Optional</sup> <a name="json_schema_input" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchemaInput"></a>

```python
json_schema_input: str
```

- *Type:* str

---

##### `json_schema`<sup>Required</sup> <a name="json_schema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchema"></a>

```python
json_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigKeySchema
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

---


### FeatureEngineeringKafkaConfigSubscriptionModeOutputReference <a name="FeatureEngineeringKafkaConfigSubscriptionModeOutputReference" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetAssign">reset_assign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribe">reset_subscribe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribePattern">reset_subscribe_pattern</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_assign` <a name="reset_assign" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetAssign"></a>

```python
def reset_assign() -> None
```

##### `reset_subscribe` <a name="reset_subscribe" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribe"></a>

```python
def reset_subscribe() -> None
```

##### `reset_subscribe_pattern` <a name="reset_subscribe_pattern" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribePattern"></a>

```python
def reset_subscribe_pattern() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assignInput">assign_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribeInput">subscribe_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePatternInput">subscribe_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assign">assign</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribe">subscribe</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePattern">subscribe_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assign_input`<sup>Optional</sup> <a name="assign_input" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assignInput"></a>

```python
assign_input: str
```

- *Type:* str

---

##### `subscribe_input`<sup>Optional</sup> <a name="subscribe_input" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribeInput"></a>

```python
subscribe_input: str
```

- *Type:* str

---

##### `subscribe_pattern_input`<sup>Optional</sup> <a name="subscribe_pattern_input" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePatternInput"></a>

```python
subscribe_pattern_input: str
```

- *Type:* str

---

##### `assign`<sup>Required</sup> <a name="assign" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assign"></a>

```python
assign: str
```

- *Type:* str

---

##### `subscribe`<sup>Required</sup> <a name="subscribe" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribe"></a>

```python
subscribe: str
```

- *Type:* str

---

##### `subscribe_pattern`<sup>Required</sup> <a name="subscribe_pattern" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePattern"></a>

```python
subscribe_pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigSubscriptionMode
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

---


### FeatureEngineeringKafkaConfigValueSchemaOutputReference <a name="FeatureEngineeringKafkaConfigValueSchemaOutputReference" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resetJsonSchema">reset_json_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_json_schema` <a name="reset_json_schema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resetJsonSchema"></a>

```python
def reset_json_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchemaInput">json_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchema">json_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_schema_input`<sup>Optional</sup> <a name="json_schema_input" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchemaInput"></a>

```python
json_schema_input: str
```

- *Type:* str

---

##### `json_schema`<sup>Required</sup> <a name="json_schema" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchema"></a>

```python
json_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigValueSchema
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

---



