# `dataDatabricksKnowledgeAssistantKnowledgeSource` Submodule <a name="`dataDatabricksKnowledgeAssistantKnowledgeSource` Submodule" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksKnowledgeAssistantKnowledgeSource <a name="DataDatabricksKnowledgeAssistantKnowledgeSource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source databricks_knowledge_assistant_knowledge_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksknowledgeassistantknowledgesource"

datadatabricksknowledgeassistantknowledgesource.NewDataDatabricksKnowledgeAssistantKnowledgeSource(scope Construct, id *string, config DataDatabricksKnowledgeAssistantKnowledgeSourceConfig) DataDatabricksKnowledgeAssistantKnowledgeSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksKnowledgeAssistantKnowledgeSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksknowledgeassistantknowledgesource"

datadatabricksknowledgeassistantknowledgesource.DataDatabricksKnowledgeAssistantKnowledgeSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksknowledgeassistantknowledgesource"

datadatabricksknowledgeassistantknowledgesource.DataDatabricksKnowledgeAssistantKnowledgeSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksknowledgeassistantknowledgesource"

datadatabricksknowledgeassistantknowledgesource.DataDatabricksKnowledgeAssistantKnowledgeSource_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksknowledgeassistantknowledgesource"

datadatabricksknowledgeassistantknowledgesource.DataDatabricksKnowledgeAssistantKnowledgeSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksKnowledgeAssistantKnowledgeSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksKnowledgeAssistantKnowledgeSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksKnowledgeAssistantKnowledgeSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksKnowledgeAssistantKnowledgeSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.files">Files</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.fileTable">FileTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.index">Index</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.knowledgeCutoffTime">KnowledgeCutoffTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.files"></a>

```go
func Files() DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference</a>

---

##### `FileTable`<sup>Required</sup> <a name="FileTable" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.fileTable"></a>

```go
func FileTable() DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.index"></a>

```go
func Index() DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference</a>

---

##### `KnowledgeCutoffTime`<sup>Required</sup> <a name="KnowledgeCutoffTime" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.knowledgeCutoffTime"></a>

```go
func KnowledgeCutoffTime() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference</a>

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksKnowledgeAssistantKnowledgeSourceConfig <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksknowledgeassistantknowledgesource"

&datadatabricksknowledgeassistantknowledgesource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#name DataDatabricksKnowledgeAssistantKnowledgeSource#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#provider_config DataDatabricksKnowledgeAssistantKnowledgeSource#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#name DataDatabricksKnowledgeAssistantKnowledgeSource#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#provider_config DataDatabricksKnowledgeAssistantKnowledgeSource#provider_config}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourceFiles <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceFiles" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksknowledgeassistantknowledgesource"

&datadatabricksknowledgeassistantknowledgesource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles {
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#path DataDatabricksKnowledgeAssistantKnowledgeSource#path}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#path DataDatabricksKnowledgeAssistantKnowledgeSource#path}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksknowledgeassistantknowledgesource"

&datadatabricksknowledgeassistantknowledgesource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable {
	FileCol: *string,
	TableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable.property.fileCol">FileCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#file_col DataDatabricksKnowledgeAssistantKnowledgeSource#file_col}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#table_name DataDatabricksKnowledgeAssistantKnowledgeSource#table_name}. |

---

##### `FileCol`<sup>Required</sup> <a name="FileCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable.property.fileCol"></a>

```go
FileCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#file_col DataDatabricksKnowledgeAssistantKnowledgeSource#file_col}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#table_name DataDatabricksKnowledgeAssistantKnowledgeSource#table_name}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourceIndex <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceIndex" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksknowledgeassistantknowledgesource"

&datadatabricksknowledgeassistantknowledgesource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex {
	DocUriCol: *string,
	IndexName: *string,
	TextCol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.property.docUriCol">DocUriCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#doc_uri_col DataDatabricksKnowledgeAssistantKnowledgeSource#doc_uri_col}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.property.indexName">IndexName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#index_name DataDatabricksKnowledgeAssistantKnowledgeSource#index_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.property.textCol">TextCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#text_col DataDatabricksKnowledgeAssistantKnowledgeSource#text_col}. |

---

##### `DocUriCol`<sup>Required</sup> <a name="DocUriCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.property.docUriCol"></a>

```go
DocUriCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#doc_uri_col DataDatabricksKnowledgeAssistantKnowledgeSource#doc_uri_col}.

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.property.indexName"></a>

```go
IndexName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#index_name DataDatabricksKnowledgeAssistantKnowledgeSource#index_name}.

---

##### `TextCol`<sup>Required</sup> <a name="TextCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.property.textCol"></a>

```go
TextCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#text_col DataDatabricksKnowledgeAssistantKnowledgeSource#text_col}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksknowledgeassistantknowledgesource"

&datadatabricksknowledgeassistantknowledgesource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSource#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/knowledge_assistant_knowledge_source#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSource#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksknowledgeassistantknowledgesource"

datadatabricksknowledgeassistantknowledgesource.NewDataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles">DataDatabricksKnowledgeAssistantKnowledgeSourceFiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksKnowledgeAssistantKnowledgeSourceFiles
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles">DataDatabricksKnowledgeAssistantKnowledgeSourceFiles</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksknowledgeassistantknowledgesource"

datadatabricksknowledgeassistantknowledgesource.NewDataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileColInput">FileColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileCol">FileCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable">DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileColInput`<sup>Optional</sup> <a name="FileColInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileColInput"></a>

```go
func FileColInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `FileCol`<sup>Required</sup> <a name="FileCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileCol"></a>

```go
func FileCol() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable">DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksknowledgeassistantknowledgesource"

datadatabricksknowledgeassistantknowledgesource.NewDataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriColInput">DocUriColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textColInput">TextColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriCol">DocUriCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textCol">TextCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex">DataDatabricksKnowledgeAssistantKnowledgeSourceIndex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DocUriColInput`<sup>Optional</sup> <a name="DocUriColInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriColInput"></a>

```go
func DocUriColInput() *string
```

- *Type:* *string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexNameInput"></a>

```go
func IndexNameInput() *string
```

- *Type:* *string

---

##### `TextColInput`<sup>Optional</sup> <a name="TextColInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textColInput"></a>

```go
func TextColInput() *string
```

- *Type:* *string

---

##### `DocUriCol`<sup>Required</sup> <a name="DocUriCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriCol"></a>

```go
func DocUriCol() *string
```

- *Type:* *string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `TextCol`<sup>Required</sup> <a name="TextCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textCol"></a>

```go
func TextCol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksKnowledgeAssistantKnowledgeSourceIndex
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex">DataDatabricksKnowledgeAssistantKnowledgeSourceIndex</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksknowledgeassistantknowledgesource"

datadatabricksknowledgeassistantknowledgesource.NewDataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



