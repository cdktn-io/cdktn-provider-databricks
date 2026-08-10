# `dataDatabricksSupervisorAgentTool` Submodule <a name="`dataDatabricksSupervisorAgentTool` Submodule" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSupervisorAgentTool <a name="DataDatabricksSupervisorAgentTool" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool databricks_supervisor_agent_tool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

datadatabrickssupervisoragenttool.NewDataDatabricksSupervisorAgentTool(scope Construct, id *string, config DataDatabricksSupervisorAgentToolConfig) DataDatabricksSupervisorAgentTool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig">DataDatabricksSupervisorAgentToolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig">DataDatabricksSupervisorAgentToolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksSupervisorAgentToolProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig">DataDatabricksSupervisorAgentToolProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksSupervisorAgentTool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

datadatabrickssupervisoragenttool.DataDatabricksSupervisorAgentTool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

datadatabrickssupervisoragenttool.DataDatabricksSupervisorAgentTool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

datadatabrickssupervisoragenttool.DataDatabricksSupervisorAgentTool_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

datadatabrickssupervisoragenttool.DataDatabricksSupervisorAgentTool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksSupervisorAgentTool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksSupervisorAgentTool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksSupervisorAgentTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksSupervisorAgentTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.app">App</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference">DataDatabricksSupervisorAgentToolAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.genieSpace">GenieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference">DataDatabricksSupervisorAgentToolGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.knowledgeAssistant">KnowledgeAssistant</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference">DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference">DataDatabricksSupervisorAgentToolProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.toolId">ToolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.toolType">ToolType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.ucConnection">UcConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference">DataDatabricksSupervisorAgentToolUcConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.ucFunction">UcFunction</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference">DataDatabricksSupervisorAgentToolUcFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.volume">Volume</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference">DataDatabricksSupervisorAgentToolVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.app"></a>

```go
func App() DataDatabricksSupervisorAgentToolAppOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference">DataDatabricksSupervisorAgentToolAppOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GenieSpace`<sup>Required</sup> <a name="GenieSpace" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.genieSpace"></a>

```go
func GenieSpace() DataDatabricksSupervisorAgentToolGenieSpaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference">DataDatabricksSupervisorAgentToolGenieSpaceOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KnowledgeAssistant`<sup>Required</sup> <a name="KnowledgeAssistant" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.knowledgeAssistant"></a>

```go
func KnowledgeAssistant() DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference">DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksSupervisorAgentToolProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference">DataDatabricksSupervisorAgentToolProviderConfigOutputReference</a>

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.toolId"></a>

```go
func ToolId() *string
```

- *Type:* *string

---

##### `ToolType`<sup>Required</sup> <a name="ToolType" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.toolType"></a>

```go
func ToolType() *string
```

- *Type:* *string

---

##### `UcConnection`<sup>Required</sup> <a name="UcConnection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.ucConnection"></a>

```go
func UcConnection() DataDatabricksSupervisorAgentToolUcConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference">DataDatabricksSupervisorAgentToolUcConnectionOutputReference</a>

---

##### `UcFunction`<sup>Required</sup> <a name="UcFunction" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.ucFunction"></a>

```go
func UcFunction() DataDatabricksSupervisorAgentToolUcFunctionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference">DataDatabricksSupervisorAgentToolUcFunctionOutputReference</a>

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.volume"></a>

```go
func Volume() DataDatabricksSupervisorAgentToolVolumeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference">DataDatabricksSupervisorAgentToolVolumeOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSupervisorAgentToolApp <a name="DataDatabricksSupervisorAgentToolApp" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolApp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

&datadatabrickssupervisoragenttool.DataDatabricksSupervisorAgentToolApp {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolApp.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolApp.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}.

---

### DataDatabricksSupervisorAgentToolConfig <a name="DataDatabricksSupervisorAgentToolConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

&datadatabrickssupervisoragenttool.DataDatabricksSupervisorAgentToolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig">DataDatabricksSupervisorAgentToolProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#provider_config DataDatabricksSupervisorAgentTool#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksSupervisorAgentToolProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig">DataDatabricksSupervisorAgentToolProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#provider_config DataDatabricksSupervisorAgentTool#provider_config}.

---

### DataDatabricksSupervisorAgentToolGenieSpace <a name="DataDatabricksSupervisorAgentToolGenieSpace" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

&datadatabrickssupervisoragenttool.DataDatabricksSupervisorAgentToolGenieSpace {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpace.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#id DataDatabricksSupervisorAgentTool#id}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpace.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#id DataDatabricksSupervisorAgentTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksSupervisorAgentToolKnowledgeAssistant <a name="DataDatabricksSupervisorAgentToolKnowledgeAssistant" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistant.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

&datadatabrickssupervisoragenttool.DataDatabricksSupervisorAgentToolKnowledgeAssistant {
	KnowledgeAssistantId: *string,
	ServingEndpointName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistant.property.knowledgeAssistantId">KnowledgeAssistantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#knowledge_assistant_id DataDatabricksSupervisorAgentTool#knowledge_assistant_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistant.property.servingEndpointName">ServingEndpointName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#serving_endpoint_name DataDatabricksSupervisorAgentTool#serving_endpoint_name}. |

---

##### `KnowledgeAssistantId`<sup>Required</sup> <a name="KnowledgeAssistantId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistant.property.knowledgeAssistantId"></a>

```go
KnowledgeAssistantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#knowledge_assistant_id DataDatabricksSupervisorAgentTool#knowledge_assistant_id}.

---

##### `ServingEndpointName`<sup>Optional</sup> <a name="ServingEndpointName" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistant.property.servingEndpointName"></a>

```go
ServingEndpointName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#serving_endpoint_name DataDatabricksSupervisorAgentTool#serving_endpoint_name}.

---

### DataDatabricksSupervisorAgentToolProviderConfig <a name="DataDatabricksSupervisorAgentToolProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

&datadatabrickssupervisoragenttool.DataDatabricksSupervisorAgentToolProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#workspace_id DataDatabricksSupervisorAgentTool#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#workspace_id DataDatabricksSupervisorAgentTool#workspace_id}.

---

### DataDatabricksSupervisorAgentToolUcConnection <a name="DataDatabricksSupervisorAgentToolUcConnection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

&datadatabrickssupervisoragenttool.DataDatabricksSupervisorAgentToolUcConnection {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnection.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnection.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}.

---

### DataDatabricksSupervisorAgentToolUcFunction <a name="DataDatabricksSupervisorAgentToolUcFunction" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

&datadatabrickssupervisoragenttool.DataDatabricksSupervisorAgentToolUcFunction {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunction.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunction.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}.

---

### DataDatabricksSupervisorAgentToolVolume <a name="DataDatabricksSupervisorAgentToolVolume" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolume.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

&datadatabrickssupervisoragenttool.DataDatabricksSupervisorAgentToolVolume {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolume.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolume.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSupervisorAgentToolAppOutputReference <a name="DataDatabricksSupervisorAgentToolAppOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

datadatabrickssupervisoragenttool.NewDataDatabricksSupervisorAgentToolAppOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksSupervisorAgentToolAppOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolApp">DataDatabricksSupervisorAgentToolApp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksSupervisorAgentToolApp
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolApp">DataDatabricksSupervisorAgentToolApp</a>

---


### DataDatabricksSupervisorAgentToolGenieSpaceOutputReference <a name="DataDatabricksSupervisorAgentToolGenieSpaceOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

datadatabrickssupervisoragenttool.NewDataDatabricksSupervisorAgentToolGenieSpaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksSupervisorAgentToolGenieSpaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpace">DataDatabricksSupervisorAgentToolGenieSpace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksSupervisorAgentToolGenieSpace
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpace">DataDatabricksSupervisorAgentToolGenieSpace</a>

---


### DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference <a name="DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

datadatabrickssupervisoragenttool.NewDataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.resetServingEndpointName">ResetServingEndpointName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServingEndpointName` <a name="ResetServingEndpointName" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.resetServingEndpointName"></a>

```go
func ResetServingEndpointName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantIdInput">KnowledgeAssistantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointNameInput">ServingEndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantId">KnowledgeAssistantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointName">ServingEndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistant">DataDatabricksSupervisorAgentToolKnowledgeAssistant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KnowledgeAssistantIdInput`<sup>Optional</sup> <a name="KnowledgeAssistantIdInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantIdInput"></a>

```go
func KnowledgeAssistantIdInput() *string
```

- *Type:* *string

---

##### `ServingEndpointNameInput`<sup>Optional</sup> <a name="ServingEndpointNameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointNameInput"></a>

```go
func ServingEndpointNameInput() *string
```

- *Type:* *string

---

##### `KnowledgeAssistantId`<sup>Required</sup> <a name="KnowledgeAssistantId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantId"></a>

```go
func KnowledgeAssistantId() *string
```

- *Type:* *string

---

##### `ServingEndpointName`<sup>Required</sup> <a name="ServingEndpointName" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointName"></a>

```go
func ServingEndpointName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksSupervisorAgentToolKnowledgeAssistant
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistant">DataDatabricksSupervisorAgentToolKnowledgeAssistant</a>

---


### DataDatabricksSupervisorAgentToolProviderConfigOutputReference <a name="DataDatabricksSupervisorAgentToolProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

datadatabrickssupervisoragenttool.NewDataDatabricksSupervisorAgentToolProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksSupervisorAgentToolProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksSupervisorAgentToolUcConnectionOutputReference <a name="DataDatabricksSupervisorAgentToolUcConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

datadatabrickssupervisoragenttool.NewDataDatabricksSupervisorAgentToolUcConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksSupervisorAgentToolUcConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnection">DataDatabricksSupervisorAgentToolUcConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksSupervisorAgentToolUcConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnection">DataDatabricksSupervisorAgentToolUcConnection</a>

---


### DataDatabricksSupervisorAgentToolUcFunctionOutputReference <a name="DataDatabricksSupervisorAgentToolUcFunctionOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

datadatabrickssupervisoragenttool.NewDataDatabricksSupervisorAgentToolUcFunctionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksSupervisorAgentToolUcFunctionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunction">DataDatabricksSupervisorAgentToolUcFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksSupervisorAgentToolUcFunction
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunction">DataDatabricksSupervisorAgentToolUcFunction</a>

---


### DataDatabricksSupervisorAgentToolVolumeOutputReference <a name="DataDatabricksSupervisorAgentToolVolumeOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickssupervisoragenttool"

datadatabrickssupervisoragenttool.NewDataDatabricksSupervisorAgentToolVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksSupervisorAgentToolVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolume">DataDatabricksSupervisorAgentToolVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksSupervisorAgentToolVolume
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolume">DataDatabricksSupervisorAgentToolVolume</a>

---



