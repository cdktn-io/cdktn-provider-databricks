# `dataDatabricksDisasterRecoveryFailoverGroups` Submodule <a name="`dataDatabricksDisasterRecoveryFailoverGroups` Submodule" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDisasterRecoveryFailoverGroups <a name="DataDatabricksDisasterRecoveryFailoverGroups" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups databricks_disaster_recovery_failover_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

datadatabricksdisasterrecoveryfailovergroups.NewDataDatabricksDisasterRecoveryFailoverGroups(scope Construct, id *string, config DataDatabricksDisasterRecoveryFailoverGroupsConfig) DataDatabricksDisasterRecoveryFailoverGroups
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig">DataDatabricksDisasterRecoveryFailoverGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig">DataDatabricksDisasterRecoveryFailoverGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.resetPageSize">ResetPageSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.resetPageSize"></a>

```go
func ResetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksDisasterRecoveryFailoverGroups resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

datadatabricksdisasterrecoveryfailovergroups.DataDatabricksDisasterRecoveryFailoverGroups_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

datadatabricksdisasterrecoveryfailovergroups.DataDatabricksDisasterRecoveryFailoverGroups_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

datadatabricksdisasterrecoveryfailovergroups.DataDatabricksDisasterRecoveryFailoverGroups_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

datadatabricksdisasterrecoveryfailovergroups.DataDatabricksDisasterRecoveryFailoverGroups_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksDisasterRecoveryFailoverGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksDisasterRecoveryFailoverGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksDisasterRecoveryFailoverGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDisasterRecoveryFailoverGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.failoverGroups">FailoverGroups</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `FailoverGroups`<sup>Required</sup> <a name="FailoverGroups" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.failoverGroups"></a>

```go
func FailoverGroups() DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDisasterRecoveryFailoverGroupsConfig <a name="DataDatabricksDisasterRecoveryFailoverGroupsConfig" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

&datadatabricksdisasterrecoveryfailovergroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Parent: *string,
	PageSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#parent DataDatabricksDisasterRecoveryFailoverGroups#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#page_size DataDatabricksDisasterRecoveryFailoverGroups#page_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#parent DataDatabricksDisasterRecoveryFailoverGroups#parent}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#page_size DataDatabricksDisasterRecoveryFailoverGroups#page_size}.

---

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

&datadatabricksdisasterrecoveryfailovergroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}.

---

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

&datadatabricksdisasterrecoveryfailovergroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets {
	Catalogs: interface{},
	DataReplicationWorkspaceSet: *string,
	LocationMappings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.property.catalogs">Catalogs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#catalogs DataDatabricksDisasterRecoveryFailoverGroups#catalogs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.property.dataReplicationWorkspaceSet">DataReplicationWorkspaceSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#data_replication_workspace_set DataDatabricksDisasterRecoveryFailoverGroups#data_replication_workspace_set}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.property.locationMappings">LocationMappings</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#location_mappings DataDatabricksDisasterRecoveryFailoverGroups#location_mappings}. |

---

##### `Catalogs`<sup>Required</sup> <a name="Catalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.property.catalogs"></a>

```go
Catalogs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#catalogs DataDatabricksDisasterRecoveryFailoverGroups#catalogs}.

---

##### `DataReplicationWorkspaceSet`<sup>Required</sup> <a name="DataReplicationWorkspaceSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.property.dataReplicationWorkspaceSet"></a>

```go
DataReplicationWorkspaceSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#data_replication_workspace_set DataDatabricksDisasterRecoveryFailoverGroups#data_replication_workspace_set}.

---

##### `LocationMappings`<sup>Optional</sup> <a name="LocationMappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.property.locationMappings"></a>

```go
LocationMappings interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#location_mappings DataDatabricksDisasterRecoveryFailoverGroups#location_mappings}.

---

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

&datadatabricksdisasterrecoveryfailovergroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}.

---

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

&datadatabricksdisasterrecoveryfailovergroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings {
	Name: *string,
	UriByRegion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings.property.uriByRegion">UriByRegion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#uri_by_region DataDatabricksDisasterRecoveryFailoverGroups#uri_by_region}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}.

---

##### `UriByRegion`<sup>Required</sup> <a name="UriByRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings.property.uriByRegion"></a>

```go
UriByRegion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#uri_by_region DataDatabricksDisasterRecoveryFailoverGroups#uri_by_region}.

---

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

&datadatabricksdisasterrecoveryfailovergroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion {
	Region: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#region DataDatabricksDisasterRecoveryFailoverGroups#region}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#uri DataDatabricksDisasterRecoveryFailoverGroups#uri}. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#region DataDatabricksDisasterRecoveryFailoverGroups#region}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#uri DataDatabricksDisasterRecoveryFailoverGroups#uri}.

---

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

&datadatabricksdisasterrecoveryfailovergroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets {
	Name: *string,
	ReplicateWorkspaceAssets: interface{},
	WorkspaceIds: *[]*string,
	StableUrlNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.replicateWorkspaceAssets">ReplicateWorkspaceAssets</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#replicate_workspace_assets DataDatabricksDisasterRecoveryFailoverGroups#replicate_workspace_assets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.workspaceIds">WorkspaceIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#workspace_ids DataDatabricksDisasterRecoveryFailoverGroups#workspace_ids}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.stableUrlNames">StableUrlNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#stable_url_names DataDatabricksDisasterRecoveryFailoverGroups#stable_url_names}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}.

---

##### `ReplicateWorkspaceAssets`<sup>Required</sup> <a name="ReplicateWorkspaceAssets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.replicateWorkspaceAssets"></a>

```go
ReplicateWorkspaceAssets interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#replicate_workspace_assets DataDatabricksDisasterRecoveryFailoverGroups#replicate_workspace_assets}.

---

##### `WorkspaceIds`<sup>Required</sup> <a name="WorkspaceIds" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.workspaceIds"></a>

```go
WorkspaceIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#workspace_ids DataDatabricksDisasterRecoveryFailoverGroups#workspace_ids}.

---

##### `StableUrlNames`<sup>Optional</sup> <a name="StableUrlNames" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.stableUrlNames"></a>

```go
StableUrlNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/disaster_recovery_failover_groups#stable_url_names DataDatabricksDisasterRecoveryFailoverGroups#stable_url_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

datadatabricksdisasterrecoveryfailovergroups.NewDataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.get"></a>

```go
func Get(index *f64) DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

datadatabricksdisasterrecoveryfailovergroups.NewDataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.effectivePrimaryRegion">EffectivePrimaryRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.initialPrimaryRegion">InitialPrimaryRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.replicationPoint">ReplicationPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.unityCatalogAssets">UnityCatalogAssets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.workspaceSets">WorkspaceSets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectivePrimaryRegion`<sup>Required</sup> <a name="EffectivePrimaryRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.effectivePrimaryRegion"></a>

```go
func EffectivePrimaryRegion() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `InitialPrimaryRegion`<sup>Required</sup> <a name="InitialPrimaryRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.initialPrimaryRegion"></a>

```go
func InitialPrimaryRegion() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `ReplicationPoint`<sup>Required</sup> <a name="ReplicationPoint" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.replicationPoint"></a>

```go
func ReplicationPoint() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UnityCatalogAssets`<sup>Required</sup> <a name="UnityCatalogAssets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.unityCatalogAssets"></a>

```go
func UnityCatalogAssets() DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WorkspaceSets`<sup>Required</sup> <a name="WorkspaceSets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.workspaceSets"></a>

```go
func WorkspaceSets() DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

datadatabricksdisasterrecoveryfailovergroups.NewDataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.get"></a>

```go
func Get(index *f64) DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

datadatabricksdisasterrecoveryfailovergroups.NewDataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

datadatabricksdisasterrecoveryfailovergroups.NewDataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.get"></a>

```go
func Get(index *f64) DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

datadatabricksdisasterrecoveryfailovergroups.NewDataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion">PutUriByRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUriByRegion` <a name="PutUriByRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion"></a>

```go
func PutUriByRegion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegion">UriByRegion</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegionInput">UriByRegionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UriByRegion`<sup>Required</sup> <a name="UriByRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegion"></a>

```go
func UriByRegion() DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UriByRegionInput`<sup>Optional</sup> <a name="UriByRegionInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegionInput"></a>

```go
func UriByRegionInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

datadatabricksdisasterrecoveryfailovergroups.NewDataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.get"></a>

```go
func Get(index *f64) DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

datadatabricksdisasterrecoveryfailovergroups.NewDataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

datadatabricksdisasterrecoveryfailovergroups.NewDataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.putCatalogs">PutCatalogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.putLocationMappings">PutLocationMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.resetLocationMappings">ResetLocationMappings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCatalogs` <a name="PutCatalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.putCatalogs"></a>

```go
func PutCatalogs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.putCatalogs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLocationMappings` <a name="PutLocationMappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.putLocationMappings"></a>

```go
func PutLocationMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.putLocationMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLocationMappings` <a name="ResetLocationMappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.resetLocationMappings"></a>

```go
func ResetLocationMappings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.catalogs">Catalogs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.locationMappings">LocationMappings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.catalogsInput">CatalogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSetInput">DataReplicationWorkspaceSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.locationMappingsInput">LocationMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSet">DataReplicationWorkspaceSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Catalogs`<sup>Required</sup> <a name="Catalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.catalogs"></a>

```go
func Catalogs() DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList</a>

---

##### `LocationMappings`<sup>Required</sup> <a name="LocationMappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.locationMappings"></a>

```go
func LocationMappings() DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList</a>

---

##### `CatalogsInput`<sup>Optional</sup> <a name="CatalogsInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.catalogsInput"></a>

```go
func CatalogsInput() interface{}
```

- *Type:* interface{}

---

##### `DataReplicationWorkspaceSetInput`<sup>Optional</sup> <a name="DataReplicationWorkspaceSetInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSetInput"></a>

```go
func DataReplicationWorkspaceSetInput() *string
```

- *Type:* *string

---

##### `LocationMappingsInput`<sup>Optional</sup> <a name="LocationMappingsInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.locationMappingsInput"></a>

```go
func LocationMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `DataReplicationWorkspaceSet`<sup>Required</sup> <a name="DataReplicationWorkspaceSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSet"></a>

```go
func DataReplicationWorkspaceSet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

datadatabricksdisasterrecoveryfailovergroups.NewDataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.get"></a>

```go
func Get(index *f64) DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoveryfailovergroups"

datadatabricksdisasterrecoveryfailovergroups.NewDataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resetStableUrlNames">ResetStableUrlNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStableUrlNames` <a name="ResetStableUrlNames" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resetStableUrlNames"></a>

```go
func ResetStableUrlNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.replicateWorkspaceAssetsInput">ReplicateWorkspaceAssetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.stableUrlNamesInput">StableUrlNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.workspaceIdsInput">WorkspaceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.replicateWorkspaceAssets">ReplicateWorkspaceAssets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.stableUrlNames">StableUrlNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.workspaceIds">WorkspaceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReplicateWorkspaceAssetsInput`<sup>Optional</sup> <a name="ReplicateWorkspaceAssetsInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.replicateWorkspaceAssetsInput"></a>

```go
func ReplicateWorkspaceAssetsInput() interface{}
```

- *Type:* interface{}

---

##### `StableUrlNamesInput`<sup>Optional</sup> <a name="StableUrlNamesInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.stableUrlNamesInput"></a>

```go
func StableUrlNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `WorkspaceIdsInput`<sup>Optional</sup> <a name="WorkspaceIdsInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.workspaceIdsInput"></a>

```go
func WorkspaceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReplicateWorkspaceAssets`<sup>Required</sup> <a name="ReplicateWorkspaceAssets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.replicateWorkspaceAssets"></a>

```go
func ReplicateWorkspaceAssets() interface{}
```

- *Type:* interface{}

---

##### `StableUrlNames`<sup>Required</sup> <a name="StableUrlNames" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.stableUrlNames"></a>

```go
func StableUrlNames() *[]*string
```

- *Type:* *[]*string

---

##### `WorkspaceIds`<sup>Required</sup> <a name="WorkspaceIds" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.workspaceIds"></a>

```go
func WorkspaceIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets</a>

---



