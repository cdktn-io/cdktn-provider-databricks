# `dataDatabricksKnowledgeAssistantKnowledgeSources` Submodule <a name="`dataDatabricksKnowledgeAssistantKnowledgeSources` Submodule" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksKnowledgeAssistantKnowledgeSources <a name="DataDatabricksKnowledgeAssistantKnowledgeSources" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources databricks_knowledge_assistant_knowledge_sources}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

datadatabricksknowledgeassistantknowledgesources.NewDataDatabricksKnowledgeAssistantKnowledgeSources(scope Construct, id *string, config DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig) DataDatabricksKnowledgeAssistantKnowledgeSources
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksKnowledgeAssistantKnowledgeSources resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

datadatabricksknowledgeassistantknowledgesources.DataDatabricksKnowledgeAssistantKnowledgeSources_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

datadatabricksknowledgeassistantknowledgesources.DataDatabricksKnowledgeAssistantKnowledgeSources_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

datadatabricksknowledgeassistantknowledgesources.DataDatabricksKnowledgeAssistantKnowledgeSources_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

datadatabricksknowledgeassistantknowledgesources.DataDatabricksKnowledgeAssistantKnowledgeSources_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksKnowledgeAssistantKnowledgeSources resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksKnowledgeAssistantKnowledgeSources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksKnowledgeAssistantKnowledgeSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksKnowledgeAssistantKnowledgeSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.knowledgeSources">KnowledgeSources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `KnowledgeSources`<sup>Required</sup> <a name="KnowledgeSources" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.knowledgeSources"></a>

```go
func KnowledgeSources() DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

&datadatabricksknowledgeassistantknowledgesources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Parent: *string,
	PageSize: *f64,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#parent DataDatabricksKnowledgeAssistantKnowledgeSources#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#page_size DataDatabricksKnowledgeAssistantKnowledgeSources#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#provider_config DataDatabricksKnowledgeAssistantKnowledgeSources#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#parent DataDatabricksKnowledgeAssistantKnowledgeSources#parent}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#page_size DataDatabricksKnowledgeAssistantKnowledgeSources#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#provider_config DataDatabricksKnowledgeAssistantKnowledgeSources#provider_config}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

&datadatabricksknowledgeassistantknowledgesources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources {
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#name DataDatabricksKnowledgeAssistantKnowledgeSources#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#provider_config DataDatabricksKnowledgeAssistantKnowledgeSources#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#name DataDatabricksKnowledgeAssistantKnowledgeSources#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#provider_config DataDatabricksKnowledgeAssistantKnowledgeSources#provider_config}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

&datadatabricksknowledgeassistantknowledgesources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles {
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#path DataDatabricksKnowledgeAssistantKnowledgeSources#path}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#path DataDatabricksKnowledgeAssistantKnowledgeSources#path}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

&datadatabricksknowledgeassistantknowledgesources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable {
	FileCol: *string,
	TableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable.property.fileCol">FileCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#file_col DataDatabricksKnowledgeAssistantKnowledgeSources#file_col}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#table_name DataDatabricksKnowledgeAssistantKnowledgeSources#table_name}. |

---

##### `FileCol`<sup>Required</sup> <a name="FileCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable.property.fileCol"></a>

```go
FileCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#file_col DataDatabricksKnowledgeAssistantKnowledgeSources#file_col}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#table_name DataDatabricksKnowledgeAssistantKnowledgeSources#table_name}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

&datadatabricksknowledgeassistantknowledgesources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex {
	DocUriCol: *string,
	IndexName: *string,
	TextCol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.property.docUriCol">DocUriCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#doc_uri_col DataDatabricksKnowledgeAssistantKnowledgeSources#doc_uri_col}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.property.indexName">IndexName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#index_name DataDatabricksKnowledgeAssistantKnowledgeSources#index_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.property.textCol">TextCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#text_col DataDatabricksKnowledgeAssistantKnowledgeSources#text_col}. |

---

##### `DocUriCol`<sup>Required</sup> <a name="DocUriCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.property.docUriCol"></a>

```go
DocUriCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#doc_uri_col DataDatabricksKnowledgeAssistantKnowledgeSources#doc_uri_col}.

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.property.indexName"></a>

```go
IndexName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#index_name DataDatabricksKnowledgeAssistantKnowledgeSources#index_name}.

---

##### `TextCol`<sup>Required</sup> <a name="TextCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.property.textCol"></a>

```go
TextCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#text_col DataDatabricksKnowledgeAssistantKnowledgeSources#text_col}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

&datadatabricksknowledgeassistantknowledgesources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSources#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSources#workspace_id}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

&datadatabricksknowledgeassistantknowledgesources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSources#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/knowledge_assistant_knowledge_sources#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSources#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

datadatabricksknowledgeassistantknowledgesources.NewDataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

datadatabricksknowledgeassistantknowledgesources.NewDataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.fileColInput">FileColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.fileCol">FileCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileColInput`<sup>Optional</sup> <a name="FileColInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.fileColInput"></a>

```go
func FileColInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `FileCol`<sup>Required</sup> <a name="FileCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.fileCol"></a>

```go
func FileCol() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

datadatabricksknowledgeassistantknowledgesources.NewDataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.docUriColInput">DocUriColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.textColInput">TextColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.docUriCol">DocUriCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.textCol">TextCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DocUriColInput`<sup>Optional</sup> <a name="DocUriColInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.docUriColInput"></a>

```go
func DocUriColInput() *string
```

- *Type:* *string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.indexNameInput"></a>

```go
func IndexNameInput() *string
```

- *Type:* *string

---

##### `TextColInput`<sup>Optional</sup> <a name="TextColInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.textColInput"></a>

```go
func TextColInput() *string
```

- *Type:* *string

---

##### `DocUriCol`<sup>Required</sup> <a name="DocUriCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.docUriCol"></a>

```go
func DocUriCol() *string
```

- *Type:* *string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `TextCol`<sup>Required</sup> <a name="TextCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.textCol"></a>

```go
func TextCol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

datadatabricksknowledgeassistantknowledgesources.NewDataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.get"></a>

```go
func Get(index *f64) DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

datadatabricksknowledgeassistantknowledgesources.NewDataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.files">Files</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.fileTable">FileTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.index">Index</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.knowledgeCutoffTime">KnowledgeCutoffTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.files"></a>

```go
func Files() DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference</a>

---

##### `FileTable`<sup>Required</sup> <a name="FileTable" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.fileTable"></a>

```go
func FileTable() DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.index"></a>

```go
func Index() DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference</a>

---

##### `KnowledgeCutoffTime`<sup>Required</sup> <a name="KnowledgeCutoffTime" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.knowledgeCutoffTime"></a>

```go
func KnowledgeCutoffTime() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference</a>

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

datadatabricksknowledgeassistantknowledgesources.NewDataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksknowledgeassistantknowledgesources"

datadatabricksknowledgeassistantknowledgesources.NewDataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



